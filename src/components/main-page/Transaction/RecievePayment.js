import Button from '../../UI/Button';
import Input from '../../UI/Input';
import close from '../../../picturesAndFiles/close buttom sheet modal icon.png'
import classes from './RecievePayment.module.css';
const RecievePayment = () => {
    return (
        <div className={classes['payment-div']}>
            <div className={classes['payment-1-div']}>
                <div>
                    <p>Recieve payment</p>
                    <p>Enter amount below</p>
                </div>
                <p className={classes['payment-1-div-p']}><img src={close} alt='Close'/></p>
            </div>
            <div className={classes['payment-2-div']}>
                <form>
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
        </div>
    );
};
export default RecievePayment;