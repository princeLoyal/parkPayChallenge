import { Fragment, useState } from "react";
import plus from '../../picturesAndFiles/Frame 1000001199.png';
import recieve from '../../picturesAndFiles/mingcute_transfer-3-line.png';
import make from '../../picturesAndFiles/carbon_send-alt.png';
import Del from './Transaction/Withdraw';

import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import Footer from './Footer';
import classes from './MainPage.module.css';
import Modal from '../UI/Modal';
import HandlePayment from "./Transaction/paymentHandler/HandlePayment";

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMainPage, setShowMainPage] = useState(true);
    const [showHandlePayment, setShowHandlePayment] = useState({ bool: false, type: ''});
    const showModalHandler = bool => {
        setShowModal(bool);
    };

    const clickPaymentHandler = (bool, type) => {
        setShowMainPage(!bool);
        setShowModal(!bool);
        if(type === 'recieve') {
            setShowHandlePayment({
                bool: true,
                type: 'recieve'
            });
        };
        if(type === 'make') {
            setShowHandlePayment({
                bool: true,
                type: 'make'
            });
        };
    };

    return (
        <Fragment>
        {!showMainPage &&  showHandlePayment.bool && showHandlePayment.type === 'recieve' && <HandlePayment onClose={clickPaymentHandler} type='recieve'/>}
        {!showMainPage &&  showHandlePayment.bool && showHandlePayment.type === 'make' && <HandlePayment onClose={clickPaymentHandler} type='make'/>}
             { showMainPage && <div className={classes.mainDiv}>
                <p className={classes.imgStyle} onClick={() => showModalHandler(true)}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                <header>
                    <Header />
                </header>
                <main>
                <Transaction showModal={showModalHandler}/>
                { showModal && <Modal onClose={showModalHandler} header='Select Option'>
                    <div className={classes['modal-div']} onClick={() => clickPaymentHandler(true, 'recieve')}>
                        <p className={classes['modal-div-p']}><img src={recieve} alt='payment Icon'/></p>
                        <div className={classes['modal-div-1']}>
                            <p>Recieve payment</p>
                            <p>Recieve payment via bank transfer</p>
                        </div>
                    </div>
                    <div className={classes['modal-div']} onClick={() => clickPaymentHandler(true, 'make')}>
                        <p className={classes['modal-div-p']}><img src={make} alt='Make payment' /></p>
                        <div className={classes['modal-div-1']}>
                            <p>Make payment</p>
                            <p>send money to bank account</p>
                        </div>
                    </div>
                </Modal>}
                </main>
                <footer>
                <Footer />
                </footer>
            </div> }
        <Del bool={false}/>
        </Fragment>
    );
};
export default MainPage;
