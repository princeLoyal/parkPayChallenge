import { useState, useEffect } from 'react';

import Button from '../../../UI/Button';
import copy from '../../../../picturesAndFiles/file_copy.png';
import close from '../../../../picturesAndFiles/close buttom sheet modal icon.png';
import frame from '../../../../picturesAndFiles/Frame 1000000960.png';
import classes from './PaymentDetails.module.css';
const PaymentDetails = props => {
    const [counter, setCounter ] = useState(30);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCounter(prevCount => {
                return prevCount - 1;
            });
        }, 1000);

        return () => {
            clearTimeout(interval);
        }
    }, [counter])
    return (
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
                    <p>Brian West</p>
                </div>
                <div>
                    <p>Amount</p>
                    <p>&#8358; 5000.00</p>
                </div>
            </div>
            <div className={classes['payment-3-div']}>
                <p><img src={frame} alt='frame'/></p>
                <p>Account expires in<span>{counter}.00</span></p>
                <Button>
                    Share
                </Button>
                <button className={classes['payment-button']}>
                    Cancel
                </button>
            </div>
        </div>
    );
};
export default PaymentDetails;