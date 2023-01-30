import { useEffect, useState, Fragment } from 'react'
import CreateAccount from './CreateAccount';
import Login from './Login';
import classes from './LoginAndCreateAcc.module.css';
const FirstPage = props => {
    const [creatingAccount, setCreatingAccount] = useState(false);
    
    const loginClickHandler = () => {
        setCreatingAccount(false);
    }
    const accountCreateHandler = () => {
        setCreatingAccount(true);
    }
    return (
        <Fragment>
            {creatingAccount && <div>
                  <CreateAccount onLogin={props.onLogin} onClickLogIn={loginClickHandler}/>
            </div> }
            {!creatingAccount && <div>
                  <Login onLogin={props.onLogin} onClickCreateAcc={accountCreateHandler}/>
            </div> }
        </Fragment>
    )
};
export default FirstPage;