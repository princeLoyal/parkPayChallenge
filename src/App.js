import { useState, useEffect } from 'react';
import FirstPage from './components/main-page/MainPage';
import MainPage from './components/main-page/MainPage';
import classes from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
 useEffect(() => {
   const loggedIn = localStorage.getItem('login');
   if(loggedIn === 1){
       setIsLoggedIn(true);
       alert('hshsh');
   };
 }, []);

  return (
    <div className={classes.app}>
     { !isLoggedIn && <section>
       <FirstPage />
      </section>}
      {isLoggedIn && <section>
             <MainPage />
        </section>}
    </div>
  );
};

export default App;
