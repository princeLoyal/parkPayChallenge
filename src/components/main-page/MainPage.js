import { Fragment, useState, useContext } from "react";
import plus from '../../assests/Frame 1000001199.png';

import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import TransactionList from "./Transaction/TransactionList";
import Footer from './Footer';
import classes from './MainPage.module.css';
import AddTransactionModal from '../UI/Modals/AddTransactionModal';
import HandlePayment from "./Transaction/paymentHandler/HandlePayment";
import Withdraw from '../main-page/Transaction/Withdraw';

const MainPage = () => {
    const [focusedFooter, setFocusedFooter] = useState('home');
    const [showFullTranList, setShowFullTranList] = useState(false);
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
    const showFullTranListHandler = (bool, page) => {
        setShowFullTranList(bool);
        setFocusedFooter(page);
    }
    return (
        <Fragment>
            {showWithdraw && <Withdraw onClose={showWithdrawHandler}/>}
            {!showMainPage &&  showHandlePayment.bool && !showWithdraw && showHandlePayment.type === 'recieve' && <HandlePayment onClose={clickPaymentHandler} dashBoard={goDashBoardHandler} type='recieve'/>}
            {!showMainPage &&  showHandlePayment.bool && !showWithdraw &&showHandlePayment.type === 'make' && <HandlePayment onClose={clickPaymentHandler} dashBoard={goDashBoardHandler} type='make'/>}
             
             { showMainPage && !showFullTranList && <div className={classes['main-page-div']}>
                <p className={classes.imgStyle} onClick={() => showModalHandler(true)}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                <header>
                    <Header />
                </header> 
                <main>
                <Transaction showModal={showModalHandler} showWithdraw={showWithdrawHandler} showFullTran={showFullTranListHandler}/>
                { showModal && <AddTransactionModal onClose={showModalHandler} onClickPayment = {clickPaymentHandler}/>}
                </main> </div>}
                {!showWithdraw && !showHandlePayment.bool && <footer className={classes.footer}>
                <Footer focus={focusedFooter}/>
                </footer> }
            
        </Fragment>
    );
};
export default MainPage;
