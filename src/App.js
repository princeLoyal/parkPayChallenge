import { useState, useEffect } from 'react';
import FirstPage from './components/loginAndCreateAccount/FirstPage';
import classes from './App.module.css';

function App() {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {

  }, []);
  return (
    <div className={classes.app}>
     { !isLogedIn && 
      <section>
       <FirstPage />
      </section> }
    </div>
  );
};

export default App;
