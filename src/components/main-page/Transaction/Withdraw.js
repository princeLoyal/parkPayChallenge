import { Fragment, useState, useRef } from 'react';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import close from '../../../assests/close buttom sheet modal icon.png';
import correct from '../../../assests/Group 13 Copy 2.png';
import classes from './Withdraw.module.css';

const Withdraw = props => {
    const [validForm, setValidForm] = useState(false);
    const [validAccNum, setValidAccNum] = useState(false);
    const bank = useRef('');
    const accNum = useRef('');
    const amount = useRef('');
    const remarks = useRef('');

    const accNumValidation = () => {
        const validAccNum = accNum.current.value.trim().length > 6;
        setValidAccNum(validAccNum);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        setValidForm(true);
    }
    return (
        <Fragment>
        <div className={classes['withdraw-div']}>
            <div className={classes['withdraw-1-div']}>
                <div>
                { !validForm && <p>Send Money</p>}
                { validForm && <p>Withdraw</p>}
                    <p>Transfer to Bank Account</p>
                </div>
                <p className={classes['withdraw-1-div-p']}
                onClick={() => props.onClose(false)}
                ><img src={close} alt='Close'/></p>
            </div>
            <div className={classes['withdraw-2-div']}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='bank'>Bank</label>
                    <Input 
                    id='bank'
                    type='text'
                    placeholder='Select Bank'
                    ref={bank}
                    required
                    />
                    <label htmlFor='account number'>Account Number</label>
                    <Input 
                    id='account number'
                    type='text'
                    placeholder='Enter account number'
                    ref={accNum}
                    onBlur={accNumValidation}
                    required
                    />
                    {validAccNum && <p className={classes['withdraw-acc-num']}>
                        <span><img src={correct}/></span> <span>Your Account Name</span>
                    </p>}
                    <label htmlFor='amount'>Amount</label>
                    <Input 
                    id='amount'
                    type='number'
                    placeholder='&#8358; Enter Amount'
                    ref={amount}
                    required
                    />
                    <label htmlFor='remarks'>Remarks</label>
                    <Input 
                    id='remarks'
                    type='text'
                    placeholder="What's this for (Optional)"
                    ref={remarks}
                    />
                    <Button type='submit' className={classes['withdraw-button']}>
                        {!validForm && <p>Next</p>}
                        {validForm && <p>Withdraw</p>}
                    </Button>
                </form>
            </div>
        </div>
        </Fragment>
    );
};
export default Withdraw;