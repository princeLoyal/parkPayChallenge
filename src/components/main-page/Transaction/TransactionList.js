import { Fragment, useContext } from 'react';
import { Transactions } from '../../../App';
import credit from '../../../assests/mdi_database-arrow-down-outline.png';
import debit from '../../../assests/mdi_database-arrow-up-outline.png';
import classes from './TransactionList.module.css';
const TransactionList = props => {
   const transactions = useContext(Transactions)
   return (
      <Fragment>
         <header className={classes['transactionList-header']}>
            <p>Recent Transactions</p>
            <button onClick={() => props.showFullTran(true, 'transaction')}>View All</button>
         </header>
         <main className={classes['transactionList-main']}>
            <ul>
               {
                  transactions.map( (transaction, id) => 
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
         </main>
      </Fragment>
   );
};
export default TransactionList;
