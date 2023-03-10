import { Fragment, useState } from 'react';
import TransactionList from './TransactionList';
import FullTransactionList from './Full-Transaction-List/FullTransactionList';

import transfer from '../../../assests/mingcute_transfer-3-line.png';
import card from '../../../assests/ph_credit-card.png';

import classes from './Transaction.module.css';
const Transaction = props => {
   const [showFullList, setShowFullList] = useState(false);

    const showWithdraw = bool => {
        props.showWithdraw(true);
    }
    const showFullTranListHandler = (bool, page) => {
           setShowFullList(bool);
           props.showFullTran(bool, page);
    }
    return (
         <Fragment>
         {showFullList && <FullTransactionList onClose={showFullTranListHandler}/>}
           {!showFullList &&  <div className={classes.transaction}>
                <header className={classes['transaction-header']}>
                    <h4>Quick Transaction</h4>
                    <div className={classes['transaction-header-div']}>
                        <div onClick={() => props.showModal(true)}> 
                            <span className={classes.fSpan}><img src={transfer} alt='transfer' width='30' /></span>
                            <span className={classes.sSpan}>Payment</span>
                        </div>
                        <div onClick={() => showWithdraw(true)}>
                             <span className={classes.fSpan}><img src={card} alt='transfer' width='30' /></span>
                             <span className={classes.sSpan}>Withdraw</span>
                        </div>
                    </div>
                </header>
                <TransactionList showFullTran={showFullTranListHandler}/>
            </div>}
        </Fragment>
    );
};
export default Transaction;
