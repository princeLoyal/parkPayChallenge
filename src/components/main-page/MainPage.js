import { Fragment, useState, useContext } from "react";
import plus from '../../assests/Frame 1000001199.png';

import Header from "./Header";
import Profile from './Profile';
import Transaction from "./Transaction/Transaction";
import TransactionList from "./Transaction/Full-Transaction-List/FullTransactionList";
import Footer from './Footer';
import classes from './MainPage.module.css';
import AddTransactionModal from '../UI/Modals/AddTransactionModal';
import HandlePayment from "./Transaction/paymentHandler/HandlePayment";
import Withdraw from '../main-page/Transaction/Withdraw';

const MainPage = () => {
    const [showProfile, setShowProfile] = useState(false);
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
        setShowModal(bool);
        setShowHandlePayment( prevState => {
            return {
                bool: bool,
                type: type
            };
        });
    };
    const goDashBoardHandler = () => {
        setShowMainPage(true);
    }
    const showFullTranListHandler = (bool, page) => {
        setShowMainPage(!bool);
        setShowFullTranList(bool);
        setFocusedFooter(page);
    }
    const footerButtonClickHandler = page => {
        if(page === 'home'){
            setShowMainPage(true);
            setShowFullTranList(false);
            setFocusedFooter(page);
        } else if(page === 'transaction'){
            setShowMainPage(false);
            setShowFullTranList(true);
            setFocusedFooter(page);
        }
    }
    return (
        <Fragment>
            { showProfile && <Profile /> }
            {showWithdraw && <Withdraw onClose={showWithdrawHandler}/>}
            {!showMainPage && showHandlePayment.bool && !showWithdraw && <HandlePayment onClose={clickPaymentHandler} dashBoard={goDashBoardHandler} type={showHandlePayment.type}/>}
             
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
                { showFullTranList && <TransactionList onClose={showFullTranListHandler}/> }
                {!showWithdraw && !showHandlePayment.bool && <footer className={classes.footer}>
                <Footer focus={focusedFooter} clickHandler={footerButtonClickHandler}/>
                </footer> }
        </Fragment>
    );
};
export default MainPage;
