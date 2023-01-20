import { useState, useEffect } from 'react';
import FirstPage from './components/loginAndCreateAccount/FirstPage';
import MainPage from './components/main-page/MainPage';
import classes from './App.module.css';

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
             <MainPage />
        </section>}
    </div>
  );
};

export default App;
