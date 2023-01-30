import React, { useState, useEffect } from 'react';
import LoginAndCreateAcc from './components/loginAndCreateAccount/LoginAndCreateAcc';
import MainPage from './components/main-page/MainPage';
import classes from './App.module.css';
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

export const Transactions = React.createContext();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if(loggedIn === '1'){
        setIsLoggedIn(true);
    };
    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => {
        clearTimeout(timeout);
    };
  }, []);
  const onLoginHandler = () => {
      setIsLoggedIn(true);
  }
  return (
    <div className={classes.app}>
     { !isLoggedIn && <section>
       <LoginAndCreateAcc onLogin={onLoginHandler}/>
      </section>}
      {isLoggedIn && <section>
        <Transactions.Provider value={dummyTransactions}>
             <MainPage />
        </Transactions.Provider>
        </section>}
        { isLoading && <div className={classes.parkpay}>
                 <h1>Parkpay</h1> 
            </div> }
    </div>
  );
};

export default App;
