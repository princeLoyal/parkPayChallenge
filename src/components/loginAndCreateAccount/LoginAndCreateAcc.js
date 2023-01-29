import { useEffect, useState, Fragment } from 'react'
import CreateAccount from './CreateAccount';
import Login from './Login';
import classes from './LoginAndCreateAcc.module.css';
const FirstPage = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [creatingAccount, setCreatingAccount] = useState(false);
    useEffect(() => {
     const timeout = setTimeout(() => {
         setIsLoading(false);
         setCreatingAccount(true);
     }, 2000);
     return () => {
          clearTimeout(timeout);
     };
    }, []);
    const loginClickHandler = () => {
        setCreatingAccount(false);
    }
    const accountCreateHandler = () => {
        setCreatingAccount(true);
    }
    return (
        <Fragment>
            { isLoading && <div className={classes.parkpay}>
                 <h1>Parkpay</h1> 
            </div> }
            { !isLoading && creatingAccount && <div>
                  <CreateAccount onLogin={props.onLogin} onClickLogIn={loginClickHandler}/>
            </div> }
            { !isLoading && !creatingAccount && <div>
                  <Login onLogin={props.onLogin} onClickCreateAcc={accountCreateHandler}/>
            </div> }
        </Fragment>
    )
};
export default FirstPage;