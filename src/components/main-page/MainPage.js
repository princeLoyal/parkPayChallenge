import { Fragment, useState } from "react";
import plus from '../../assests/Frame 1000001199.png';
import recieve from '../../assests/mingcute_transfer-3-line.png';
import make from '../../assests/carbon_send-alt.png';
import Del from './Transaction/Full-Transaction-List/FullTransactionList';

import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import Footer from './Footer';
import classes from './MainPage.module.css';
import Modal from '../UI/Modal';
import HandlePayment from "./Transaction/paymentHandler/HandlePayment";
import Withdraw from '../main-page/Transaction/Withdraw';

const MainPage = () => {
    const [showFullTranList, setShowFullTranList] = useState(true);
    const [showWithdraw, setShowWithdraw] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showMainPage, setShowMainPage] = useState(true);
    const [showHandlePayment, setShowHandlePayment] = useState({ bool: false, type: ''});
    const showModalHandler = bool => {
        setShowModal(bool);
    };

    const showWithdrawHandler = bool => {
        setShowMainPage(!bool);
        setShowWithdraw(bool);
    }
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
    const goDashBoardHandler = () => {
        setShowMainPage(true);
    }
    const showFullTranListHandler = bool => {
        setShowMainPage(bool);
    }
    return (
        <Fragment>
            {showWithdraw && <Withdraw onClose={showWithdrawHandler}/>}
            {!showMainPage &&  showHandlePayment.bool && !showWithdraw && showHandlePayment.type === 'recieve' && <HandlePayment onClose={clickPaymentHandler} dashBoard={goDashBoardHandler} type='recieve'/>}
            {!showMainPage &&  showHandlePayment.bool && !showWithdraw &&showHandlePayment.type === 'make' && <HandlePayment onClose={clickPaymentHandler} dashBoard={goDashBoardHandler} type='make'/>}
             { showMainPage && <div className={classes.mainDiv}>
                <p className={classes.imgStyle} onClick={() => showModalHandler(true)}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                {!showFullTranList && <header>
                    <Header />
                </header> }
                <main>
                <Transaction showModal={showModalHandler} showWithdraw={showWithdrawHandler} showFullTran={showFullTranListHandler}/>
                { showModal && <Modal onClose={showModalHandler} header='Select Option' className={classes['payment-modal']}>
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
        {/* <Del bool={false}/> */}
        </Fragment>
    );
};
export default MainPage;
