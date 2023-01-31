import { Fragment, useState, useRef } from 'react';
import classes from './CreateAccount.module.css';

import email from '../../assests/circum_mail.jpg';
import hide from '../../assests/Eye, Hidden.png';
import phone from '../../assests/mdi-light_phone.png';
import password from '../../assests/ph_lock-light.png';
import referal from '../../assests/ph_user-light.png';

const CreateAccount = props => {
   const [EmailValid, setEmailValid] = useState();
   const userName = useRef();
   const userEmail = useRef();
   const userPassword = useRef();
   const confirmPassword = useRef();
   const userPhone = useRef();
   const accountCreationHandler = event => {
      event.preventDefault();
      const userData = {
         // name: userName.current.value,
         // phone: userPhone.current.value,
         // email: userEmail.current.value,
         // password: userPassword.current.value,
         // password_confirmation: confirmPassword.current.value,
         name: 'Thompson Onuoha',
         phone: '09015695508',
         email: 'princeloyal1234@gmail.com',
         password: 'gmail',
         password_confirmation: 'gmail',
      };
      const databaseHandler = async() => {
         const url = 'http://167.172.181.74:9011/api/auth/register';
         const options = {
            method: 'POST', 
            headers: {
               'Accept': 'application/json',
            },
            body: JSON.stringify(userData),
            redirect: 'follow'
         };
        const response = await fetch(url, options);
        const data = await response.text();
        console.log(data);
     };
      
      databaseHandler();
      //localStorage.setItem('loggedIn', 1);
      //alert("Your logged in status has been saved. You won't need to log when the page refreshes");
      //props.onLogin();
   };

const loginButtonClickHandler = () => {
   props.onClickLogIn();
}
const emailVerify = async() => {
   const response = await fetch('http://167.172.181.74:9011/api/auth/register');
   const data = await response.json();
   alert(data);
   //for(const key in data){
    //  if(userEmail.current.value === data[key].email){
       // alert('This email has already been used. Kindly log in');
      //  props.onClickLogIn();
       // return;
    //  };
 //  };
};
    return <Fragment>
           <main>
            <header className={classes['create-account-header']}>
              <h1>Create Your Account </h1>
              <p>Pay by transfer</p>
           </header>
           <form className={classes['create-account-form']} onSubmit={accountCreationHandler}>
              <label htmlFor='name'></label>
              <input id='name' 
              type='text'
              className={classes.userName}
              placeholder='Enter Name'
              ref={userName}
              />
              <label htmlFor='email'></label>
              <input id='email' 
              type='email'
              className={classes.email}
              placeholder='Email address'
              ref={userEmail}
              
            //   onBlur={emailVerify}
              />
              <label htmlFor='phone number'></label>
              <input id='phone number' 
              type='number'
              className={classes['phone-number']}
              placeholder='Phone Number  080#########'
              ref={userPhone}
              />
              <label htmlFor='create password'></label>
              <input id='create password' 
              type='password'
              className={classes.password}
              placeholder='Create pasword'
              ref={userPassword}
              />
              <label htmlFor='confirm password'></label>
              <input id='confirm password' 
              type='password'
              className={classes.password}
              placeholder='Confirm password'
              ref={confirmPassword}
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
           </footer> </main> 
         </Fragment>
  };
  export default CreateAccount;
