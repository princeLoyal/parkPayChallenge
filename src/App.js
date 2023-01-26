import React, { useState, useEffect } from 'react';
import FirstPage from './components/loginAndCreateAccount/FirstPage';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
 useEffect(() => {
   const loggedIn = localStorage.getItem('loggedIn');
   if(loggedIn === '1'){
       setIsLoggedIn(true);
   };
 }, []);

  const onLoginHandler = () => {
      setIsLoggedIn(true);
  }
  return (
    <div className={classes.app}>
     { !isLoggedIn && <section>
       <FirstPage onLogin={onLoginHandler}/>
      </section>}
      {isLoggedIn && <section>
        <Transactions.Provider value={dummyTransactions}>
             <MainPage />
        </Transactions.Provider>
        </section>}
    </div>
  );
};

export default App;
