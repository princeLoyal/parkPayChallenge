import { Fragment } from 'react';
import TransactionList from './TransactionList';

import transfer from '../../../assests/mingcute_transfer-3-line.png';
import card from '../../../assests/ph_credit-card.png';

import classes from './Transaction.module.css';
const Transaction = props => {

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
    const showWithdraw = bool => {
        props.showWithdraw(true);
    }
    return (
        <Fragment>
            <div className={classes.transaction}>
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
                <TransactionList transactions={dummyTransactions}/>
            </div>
        </Fragment>
    );
};
export default Transaction;
