import { Fragment, useState } from 'react';
import Login from './Login';
import classes from './CreateAccount.module.css';
const CreateAccount = () => {
   const [creatingAcount, setCreatingAccount] = useState(true);
   const accountCreationHandler = event => {
      event.preventDefault();
      localStorage.setItem('loggedIn', 1);
      alert('local storage set')
   }
   const loginButtonClickHandler = () => {
           setCreatingAccount(false);
   }
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
              />
              <label htmlFor='phone number'></label>
              <input id='phone number' 
              type='number'
              className={classes['phone-number']}
              placeholder='Phone Number'
              />
              <label htmlFor='create password'></label>
              <input id='create password' 
              type='password'
              className={classes.password}
              placeholder='Create pasword'
              />
              <label htmlFor='confirm password'></label>
              <input id='confirm password' 
              type='password'
              className={classes.password}
              placeholder='Confirm password'
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
           {!creatingAcount && <Login />}
       </Fragment>
  };
  export default CreateAccount;
