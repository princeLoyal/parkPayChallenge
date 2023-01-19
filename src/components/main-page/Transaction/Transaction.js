import { Fragment } from 'react';
import TransactionList from './TransactionList';

import transfer from '../../../picturesAndFiles/mingcute_transfer-3-line.png';
import card from '../../../picturesAndFiles/ph_credit-card.png';

import classes from './Transaction.module.css';
const Transaction = () => {
    return (
        <Fragment>
            <div className={classes.transaction}>
                <header className={classes['transaction-header']}>
                    <h4>Quick Transaction</h4>
                    <div className={classes['transaction-header-div']}>
                        <div> 
                            <span className={classes.fSpan}><img src={transfer} alt='transfer' width='30' /></span>
                            <span className={classes.sSpan}>Payment</span>
                        </div>
                        <div>
                             <span className={classes.fSpan}><img src={card} alt='transfer' width='30' /></span>
                             <span className={classes.sSpan}>Withdraw</span>
                        </div>
                    </div>
                </header>
                <TransactionList />
            </div>
        </Fragment>
    );
};
export default Transaction;
