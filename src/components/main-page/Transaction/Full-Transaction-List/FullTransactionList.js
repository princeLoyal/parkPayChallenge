import { Fragment, useState, useContext } from 'react';
import { Transactions } from '../../../../App.js';

import back from '../../../../assests/left.png';
import credit from '../../../../assests/mdi_database-arrow-down-outline.png';
import debit from '../../../../assests/mdi_database-arrow-up-outline.png';

import classes from './FullTransactionList.module.css';
const FullTransactionList = props => {
    const transactions = useContext(Transactions);
    const [type, setType] = useState('all');
    const [list, setList] = useState(transactions);

    const filterTransctions = type => {
        const filter = transactions.filter( transaction => {
            if(transaction.type === type){
                return true;
            };
            if(type === 'all'){
                return true;
            };
        });
        setList(filter);
    }

    const typeHandler = type => {
        filterTransctions(type);
        setType(type);
    }
    return (
        <Fragment>
            <div className={classes['fullTransaction-div']}>
                <p onClick={() => props.onClose(false, 'home')}><img src={back} alt='back'/></p>
                <div>
                    <p>Transactions</p>
                    <p>Transactions on your Alee wallet</p>
                </div>
            </div>
            <nav className={classes['fullTransaction-nav']}>
                <button onClick={() => typeHandler('all')} className={type === 'all' && classes['all-focused']}>All</button>
                <button onClick={() => typeHandler('credit')} className={type === 'credit' && classes['credit-focused']}>Credit</button>
                <button onClick={() => typeHandler('debit')} className={type === 'debit' && classes['debit-focused']}>Debit</button>
            </nav>
            <ul  className={classes['fullTransaction-ul']}>
               {
                  list.map( (transaction, id) => 
                     <li key={id}>
                           <div className={classes['transactionList-main-li-div-1']}>
                              <div className={classes['transactionList-main-li-div-1-1']}>
                                 {transaction.type === 'credit' && <p><img src={credit} alt='credit symbol' width='30'/></p>}
                                 {transaction.type === 'debit' && <p><img src={debit} alt='debit symbol' width='30'/></p>}
                              </div>
                              <div>
                                 <p className={classes['transactionList-main-div-p']}>{transaction.name}</p>
                                 <p>{transaction.bank}</p>
                                 <p>{transaction.accountNumber}</p>
                              </div>
                           </div>
                           <div className={classes['transactionList-main-li-div-2']}>
                              <p className={classes['transactionList-main-div-p']}>{transaction.amount}</p>
                              <p>{transaction.date}</p>
                              <p>{transaction.time}</p>
                           </div>
                     </li>     
                  )
               }
            </ul>
        </Fragment>
    );
};
export default FullTransactionList;
