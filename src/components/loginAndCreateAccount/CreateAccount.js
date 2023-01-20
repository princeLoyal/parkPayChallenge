import { Fragment, useState } from 'react';
import Login from './Login';
import classes from './CreateAccount.module.css';
const CreateAccount = props => {
   const [creatingAcount, setCreatingAccount] = useState(true);
   const accountCreationHandler = event => {
      event.preventDefault();
      localStorage.setItem('loggedIn', 1);
      alert("Your logged in status has been saved. You won't need to log when the page refreshes");
      props.onLogin();
   };
   const loginButtonClickHandler = () => {
           setCreatingAccount(false);
   };
    return <Fragment>
           { creatingAcount && <main>
            <header className={classes['create-account-header']}>
              <h1>Create Your Account </h1>
              <p>Pay by transfer</p>
           </header>
           <form className={classes['create-account-form']} onSubmit={accountCreationHandler}>
              <label htmlFor='email'></label>
              <input id='email' 
              type='email'
              className={classes.email}
              placeholder='Email address'
              required
              />
              <label htmlFor='phone number'></label>
              <input id='phone number' 
              type='number'
              className={classes['phone-number']}
              placeholder='Phone Number'
              required
              />
              <label htmlFor='create password'></label>
              <input id='create password' 
              type='password'
              className={classes.password}
              placeholder='Create pasword'
              required
              />
              <label htmlFor='confirm password'></label>
              <input id='confirm password' 
              type='password'
              className={classes.password}
              placeholder='Confirm password'
              required
              />
              <label htmlFor='referal code'></label>
              <input id='referal code' 
              type='number'
              className={classes['referal-code']}
              placeholder='Referal code(Optional)'
              />
              <button type='submit'>Sign Up</button>
           </form>

           <footer className={classes['create-account-header-footer']}>
                <p>Already have an account? <button onClick={loginButtonClickHandler}>Log In</button></p>

                <p>
                  By tapping Sign up, you agree to our <button>Terms & conditions</button> <br/>and <button>Privacy Policy</button>
                </p>
           </footer> </main> }
           {!creatingAcount && <Login onLogin={props.onLogin}/>}
       </Fragment>
  };
  export default CreateAccount;
