import { Fragment } from 'react';
import home from '../../picturesAndFiles/majesticons_home-analytics.png';
import transaction from '../../picturesAndFiles/grommet-icons_transaction.png';
import profile from '../../picturesAndFiles/iconoir_profile-circled.png';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <Fragment>
            <footer className={classes['footer-footer']}>
                <div className={classes.focus}>
                    <span><img src={home} alt='Home icon'/></span>
                    <p>Home</p>
                </div>
                <div className={classes['footer-footer-div-2']}>
                    <span><img src={transaction} alt='Transaction icon'/></span>
                    <p>Transaction</p>
                </div>
                <div className={classes['footer-footer-div-3']}>
                    <span><img src={profile} alt='Profile icon'/></span>
                    <p>Profile</p>
                </div>
            </footer>
        </Fragment>
    );
};
export default Footer;