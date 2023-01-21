import { Fragment } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './RecievePayment.module.css';
const RecievePayment = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <p>Recieve payment</p>
                    <p>Enter amount below</p>
                </div>
                <p></p>
            </div>
            <div>
                <form>
                    <label htmlFor='amount'>Amount (Naira)</label>
                    <Input 
                    id='amount'
                    type='number'
                    />
                    <label htmlFor='description'>Description</label>
                    <Input 
                    id='description'
                    type='text'
                    />
                    <Button type='submit'>Confirm</Button>
                </form>
            </div>
        </Fragment>
    );
};
export default RecievePayment;