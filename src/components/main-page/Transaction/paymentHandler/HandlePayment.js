import { Fragment, useState } from 'react';

import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import PaymentDetails from './PaymentDetails';

import close from '../../../../assests/close buttom sheet modal icon.png'
import classes from './HandlePayment.module.css';

const HandlePayment = props => {
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    
    const showPaymentDetailsHandler = bool => {
        setShowPaymentDetails(bool);
    }
    const formSubmitHandler = event => {
        event.preventDefault();

        showPaymentDetailsHandler(true);
    };
    const onCloseHandler = () => {
        props.dashBoard();
    }
    const cancelHandler = () => {
        setShowPaymentDetails(false);
    }
    return (
        <Fragment>
        { !showPaymentDetails && <div className={classes['payment-div']}>
            <div className={classes['payment-1-div']}>
                <div>
                   { props.type === 'recieve' && <p>Recieve payment</p>}
                   { props.type === 'make' && <p>Make payment</p>}
                    <p>Enter amount below</p>
                </div>
                <p className={classes['payment-1-div-p']}
                onClick={() => props.onClose(false, '')}
                ><img src={close} alt='Close'/></p>
            </div>
            <div className={classes['payment-2-div']}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='amount'>Amount (Naira)</label>
                    <Input 
                    id='amount'
                    type='number'
                    placeholder='Enter amount'
                    />
                    <label htmlFor='description'>Description</label>
                    <Input 
                    id='description'
                    type='text'
                    placeholder='Enter description'
                    className={classes['payment-input']}
                    />
                    <Button type='submit' className={classes['payment-button']}>Confirm</Button>
                </form>
            </div>
        </div> }
        {showPaymentDetails && props.type === 'recieve' && <PaymentDetails showPayment={showPaymentDetailsHandler} type='recieve' onClose={onCloseHandler} onCancel={cancelHandler}/>}
        {showPaymentDetails && props.type === 'make' && <PaymentDetails showPayment={showPaymentDetailsHandler} type='make' onClose={onCloseHandler} onCancel={cancelHandler}/>}
        </Fragment>
    );
};
export default HandlePayment;