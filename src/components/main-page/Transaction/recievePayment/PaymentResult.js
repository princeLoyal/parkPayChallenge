import classes from './PaymentResult.module.css';
import Modal from '../../../UI/Modal';
import Button from '../../../UI/Button';

import failed from '../../../../picturesAndFiles/Frame 1000001594.png';
import success from '../../../../picturesAndFiles/Wallet_Flatline 2.png';

import close from '../../../../picturesAndFiles/close buttom sheet modal icon.png';
const PaymentResult = props => {
    return ( 
        <Modal>
            <div className={classes['payment-result-modal']}>
            <p><img src={close} alt='Close'/></p>
            <p>
                <img src={success} alt='Succesfull!'/>
                { !props.bool && <img src={failed} />}
            </p>
            { props.bool && <p>Payment Recieved!</p>}
            {!props.bool && <p>Transaction Timeout!</p>}
            { props.bool && <p>
                The sum of &#8358;50,000 was succesful
                <span>paid into your account</span>
            </p>}
            {!props.bool && <p>
                Payment transaction was not 
                <span>sucessful. Please try again</span>     
            </p>}
            <Button className={`${classes['payment-result-modal-button']} ${!props.bool && classes.failed}`}>
               { props.bool && <p>Go to dashboard</p>}
               {!props.bool && <p>Retry</p>}
            </Button>
            </div>
        </Modal>
    );
};
export default PaymentResult;