import classes from './ModalPaymentDetails.module.css';
import alert from '../../../../assests/alert-triangle.png';

import Modal from '../../../UI/Modal';
const ModalPaymentDetails = props => {
    return(
       <Modal>
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
                <div><button>
                    No, continue
                </button>
                <button>
                    Yes, Cancel
                </button></div>
            </div>
       </Modal>
    );
};
export default ModalPaymentDetails;