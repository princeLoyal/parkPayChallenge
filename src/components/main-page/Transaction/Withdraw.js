import { Fragment, useState } from 'react';

import Button from '../../UI/Button';
import Input from '../../UI/Input';

import close from '../../../picturesAndFiles/close buttom sheet modal icon.png';
import bank from '../../../picturesAndFiles/ph_bank.png';
import classes from './Withdraw.module.css';

const Withdraw = props => {
    const formSubmitHandler = () => {

    }
    return (
        <Fragment>
        <div className={classes['withdraw-div']}>
            <div className={classes['withdraw-1-div']}>
                <div>
                    <p>Send Money</p>
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
                    >gfgdxf</Input>
                    <label htmlFor='account number'>Account Number</label>
                    <Input 
                    id='account number'
                    type='text'
                    placeholder='Enter account number'
                    />
                    <label htmlFor='amount'>Amount</label>
                    <Input 
                    id='amount'
                    type='number'
                    placeholder='&#8358; Enter Amount'
                    />
                    <label htmlFor='remarks'>Remarks</label>
                    <Input 
                    id='remarks'
                    type='text'
                    placeholder="What's this for (Optional)"
                    />
                    <Button type='submit' className={classes['withdraw-button']}>Next</Button>
                </form>
            </div>
        </div>
        </Fragment>
    );
};
export default Withdraw;