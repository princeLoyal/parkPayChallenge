import { useState, useEffect, Fragment } from 'react';

import Button from '../../../UI/Button';
import Modal from '../../../UI/Modal';
import ModalResult from './PaymentResult';

import copy2 from '../../../../assests/file_copy-1.png';
import whatsapp from '../../../../assests/logos_whatsapp-icon.png';
import telegram from '../../../../assests/logos_telegram.png';
import sms from '../../../../assests/sms.png';

import copy from '../../../../assests/file_copy.png';
import close from '../../../../assests/close buttom sheet modal icon.png';
import frame from '../../../../assests/Frame 1000000960.png';


import classes from './PaymentDetails.module.css';
const PaymentDetails = props => {
    const [showResultModal, setShowResultModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [counter, setCounter ] = useState(10);
    const [resultBool, setResultBool] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            if(counter === 0) {
                const bool = Math.floor(Math.random() * 2);
                if(bool === 0){
                    setResultBool(false);
                } else {
                    setResultBool(true);
                }
                setShowResultModal(true);
            }
            setCounter(prevCount => {
                if(prevCount === 0) {
                    return prevCount
                } else {
                    return prevCount - 1
                }
            });
        }, 1000);

        return () => {
            clearTimeout(interval);
        }
    }, [counter]);

    const shareButtonHandler = bool => {
        setShowModal(bool);
    }
    const retryHandler = () => {
        setCounter(10);
        setShowResultModal(false);
    }
    const goDashBoardHandler = () => {
        props.onClose();
    }
    return (
        <Fragment>
            {showResultModal && <ModalResult bool={resultBool} onClose={retryHandler} onClickDashBoard={goDashBoardHandler}/>}
        {showModal && <Modal header='Share' onClose={shareButtonHandler} className={classes['payment-details-modal']}>
            <div className={classes['payment-modal']}>
                <div className={classes['payment-modal-div']}>
                    <p><img src={copy2} alt='copy'/></p>
                    <p>Copy</p>
                </div>
                <div className={classes['payment-modal-div']}>
                    <p><img src={whatsapp} alt='whatsapp'/></p>
                    <p>Whatsapp</p>
                </div>
                <div className={classes['payment-modal-div']}>
                    <p><img src={telegram} alt='telegram'/></p>
                    <p>Telegram</p>
                </div>
                <div className={classes['payment-modal-div']}>
                <p><img src={sms} alt='sms'/></p>
                    <p>DM</p>
                </div>
            </div>
            </Modal>}
            <div className={classes['payment-div']}>
                <div className={classes['payment-1-div']}>
                    <div>
                        <p>Payment details</p>
                        <p>Make payment to the account details below</p>
                    </div>
                    <p className={classes['payment-1-div-p']}
                    onClick={() => props.showPayment(false)}
                    ><img src={close} alt='Close'/></p>
                </div>
                <div className={classes['payment-2-div']}>
                    <div>
                        <p>Bank</p>
                        <p>First Bank</p>
                    </div>
                    <div>
                        <span>
                            <p>Account Number </p>
                            <p>3146512732</p>
                        </span>
                        <p className={classes['payment-img-p']}>Copy
                            <img src={copy} alt='Copy'/>
                        </p>
                    </div>
                    <div>
                        <p>Account Name</p>
                        <p>Thompson Onuoha Uchenna</p>
                    </div>
                    <div>
                        <p>Amount</p>
                        <p>&#8358; 5000.00</p>
                    </div>
                </div>
                <div className={classes['payment-3-div']}>
                    <p><img src={frame} alt='frame'/></p>
                    <p>Account expires in<span>{counter}:00</span></p>
                    { props.type === 'recieve' &&   <Button onClick={() => shareButtonHandler(true)} className={classes['payment-details-button']}>
                        Share
                    </Button> }
                    { props.type === 'make' &&   <Button onClick={() => shareButtonHandler()} className={classes['payment-details-button']}>
                        I've completed the payment
                    </Button> }
                    <button className={classes['payment-button']}>
                        Cancel
                    </button>
                </div>
            </div>
        </Fragment>
    );
};
export default PaymentDetails;