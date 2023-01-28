import { Fragment, useState, useRef } from 'react';
import Login from './Login';
import classes from './CreateAccount.module.css';

import email from '../../assests/circum_mail.jpg';
import hide from '../../assests/Eye, Hidden.png';
import phone from '../../assests/mdi-light_phone.png';
import password from '../../assests/ph_lock-light.png';
import referal from '../../assests/ph_user-light.png';

const CreateAccount = props => {
   const userEmail = useRef();
   const userPassword = useRef();
   const [creatingAcount, setCreatingAccount] = useState(true);
   const accountCreationHandler = event => {
      event.preventDefault();
      const data = {
         email: userEmail.current.value,
         password: userPassword.current.value
      };
      const databaseHandler = async() => {
        fetch('https://park-pay-a96b2-default-rtdb.firebaseio.com/user.json', {
           method: 'POST', 
           headers: {
              'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
        })
      };
      databaseHandler();
      //localStorage.setItem('loggedIn', 1);
      //alert("Your logged in status has been saved. You won't need to log when the page refreshes");
      //props.onLogin();
   };
   const loginButtonClickHandler = () => {
           setCreatingAccount(false);
   };

const emailVerify = async() => {
   alert(userEmail.current.value)
   const response = await fetch('https://park-pay-a96b2-default-rtdb.firebaseio.com/user.json');
   const data = await response.json();
   for(const key in data){
      if(userEmail.current.value === data[key].email){
        alert('This email has already been used. Kindly log in');
        setCreatingAccount(false);
      };
   };
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
              ref={userEmail}
              required
              onBlur={emailVerify}
              />
              <label htmlFor='phone number'></label>
              <input id='phone number' 
              type='number'
              className={classes['phone-number']}
              placeholder='Phone Number  080#########'
              required
              />
              <label htmlFor='create password'></label>
              <input id='create password' 
              type='password'
              className={classes.password}
              placeholder='Create pasword'
              required
              ref={userPassword}
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
