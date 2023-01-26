import Modal from './Modal';

import recieve from '../../../assests/mingcute_transfer-3-line.png';
import make from '../../../assests/carbon_send-alt.png';
import classes from './AddTransactionModal.module.css';

const AddTransactionModal = props => {
    return <Modal onClose={props.onClose} header='Select Option' className={classes['add-transaction-modal']}>
    <div className={classes['add-transaction-div']} onClick={() => props.onClickPayment(true, 'recieve')}>
        <p className={classes['add-transaction-div-p']}><img src={recieve} alt='payment Icon'/></p>
        <div className={classes['add-transaction-div-1']}>
            <p>Recieve payment</p>
            <p>Recieve payment via bank transfer</p>
        </div>
    </div>
    <div className={classes['add-transaction-div']} onClick={() => props.onClickPayment(true, 'make')}>
        <p className={classes['add-transaction-div-p']}><img src={make} alt='Make payment' /></p>
        <div className={classes['add-transaction-div-1']}>
            <p>Make payment</p>
            <p>send money to bank account</p>
        </div>
    </div>
</Modal>
};
export default AddTransactionModal;