import { Fragment } from 'react';
import TransactionList from './TransactionList';

import transfer from '../../../picturesAndFiles/mingcute_transfer-3-line.png';
import card from '../../../picturesAndFiles/ph_credit-card.png';

import classes from './Transaction.module.css';
const Transaction = () => {
    const dummyTransactions = [
        {
            name: 'Thompson Onuoha',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '+200,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'credit'
        },
        {
            name: 'Braith Kuku',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '+2,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'credit'
        },
        {
            name: 'Rafeal Leao',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '-2,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'debit'
        },
        {
            name: 'Annette Dove',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '+2,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'credit'
        },
        {
            name: 'Michael Afolabi',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '+2,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'credit'
        },
        {
            name: 'Stephen Drogba',
            bank: 'First Bank of Nigeria',
            accountNumber: 'XXXXXXXXXXX23455',
            amount: '-2,000',
            date: 'Sun, 13 Dec 2022',
            time: '08:59',
            type: 'debit'
        },
    ];
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
                <TransactionList transactions={dummyTransactions}/>
            </div>
        </Fragment>
    );
};
export default Transaction;
