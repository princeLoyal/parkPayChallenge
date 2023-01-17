import { Fragment, useState } from "react";
import CreateAccount from "./CreateAccount";
import classes from './Login.module.css';
const Login = () => {
    const [loggingIn, setLoggingIn] = useState(true);
    const accountCreateButtonClickHandler = () => {
        setLoggingIn(false);
    };
    const loginHandler = event => {
        event.preventDefault();
    };
    return <Fragment>
        {!loggingIn && <CreateAccount />}
        { loggingIn && <main>
        <header className={classes['login-header']}>
            <h1>Log In</h1>
            <p>Payment on the go!</p>
        </header>
        <form onSubmit={loginHandler} className={classes['login-form']}>
            <label htmlFor="email"></label>
            <input 
            id='email'
            type='email' 
            placeholder="Email address"
            className={classes['login-email']}
            />
            <label htmlFor="password"></label>
            <input 
            id='password'
            type='password' 
            placeholder="password"
            className={classes['login-password']}
            />
            <p>Forgot pasword?</p>
            <button type="submit">Log In</button>
        </form>
        <footer className={classes['login-footer']}>
        <p>Don't have an account? <button onClick={accountCreateButtonClickHandler}>Create Account</button></p>
        <p>
             By tapping Sign up, you agree to our <button>Terms & conditions</button> <br/>and <button>Privacy Policy</button>
        </p>
        </footer>
        </main> }
    </Fragment>
};
export default Login;