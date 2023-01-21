import { Fragment, useState } from "react";
import plus from '../../picturesAndFiles/Frame 1000001199.png';
import recieve from '../../picturesAndFiles/mingcute_transfer-3-line.png';
import make from '../../picturesAndFiles/carbon_send-alt.png';

import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import Footer from './Footer';
import classes from './MainPage.module.css';
import Modal from '../UI/Modal';
import RecievePayment from "./Transaction/recievePayment/RecievePayment";

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMainPage, setShowMainPage] = useState(true);
    const [showRecievePayment, setShowRecievePayment] = useState(false);
    const showModalHandler = bool => {
        setShowModal(bool);
    }
    const clickPaymentHandler = bool => {
        setShowMainPage(!bool);
        setShowRecievePayment(bool);
        setShowModal(!bool)
    }
    return (
        <Fragment>
             { showMainPage && <div className={classes.mainDiv}>
                <p className={classes.imgStyle} onClick={() => showModalHandler(true)}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                <header>
                    <Header />
                </header>
                <main>
                <Transaction />
                { showModal && <Modal onClose={showModalHandler} header='Select Option'>
                    <div className={classes['modal-div']} onClick={() => clickPaymentHandler(true)}>
                        <p className={classes['modal-div-p']}><img src={recieve} alt='payment Icon'/></p>
                        <div className={classes['modal-div-1']}>
                            <p>Recieve payment</p>
                            <p>Recieve payment via bank transfer</p>
                        </div>
                    </div>
                    <div className={classes['modal-div']}>
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
            {!showMainPage &&  showRecievePayment && <RecievePayment onClose={clickPaymentHandler}/>}
        </Fragment>
    );
};
export default MainPage;
