import classes from './ModalPaymentDetails.module.css';
import alert from '../../../../assests/alert-triangle.png';

import Modal from '../../../UI/Modal';
const ModalPaymentDetails = props => {
    return(
       <Modal className={classes['modal-payment-details']}>
            <div className={classes['modal-payment-details-div']}>
                <p>
                    <span>
                        <img src={alert}/>
                    </span>
                    <span>
                        Cancel transaction
                    </span>
                </p>
                <p>
                    <span>Do you want to cancel this</span>
                    <span>transaction</span>
                </p>
                <div><button onClick={() => props.onClose(false)}>
                    No, continue
                </button>
                <button  onClick={() => props.onCancel(false)}>
                    Yes, Cancel
                </button></div>
            </div>
       </Modal>
    );
};
export default ModalPaymentDetails;