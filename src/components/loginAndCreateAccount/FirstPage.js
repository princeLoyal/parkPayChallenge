import { useEffect, useState, Fragment } from 'react'
import CreateAccount from './CreateAccount';
import classes from './FirstPage.module.css';
const FirstPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
     const timeout = setTimeout(() => {
         setIsLoading(false);
     }, 2000);
     return () => {
          clearTimeout(timeout);
     };
    }, []);
    return (
        <Fragment>
            { isLoading && <div className={classes.parkpay}>
                 <h1>Parkpay</h1> 
            </div> }
            { !isLoading &&<div>
                  <CreateAccount />
            </div> }
        </Fragment>
    )
};
export default FirstPage;