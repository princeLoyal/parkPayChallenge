import { Fragment } from 'react';
import home from '../../assests/majesticons_home-analytics.png';
import transaction from '../../assests/grommet-icons_transaction.png';
import profile from '../../assests/iconoir_profile-circled.png';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <Fragment>
            <footer className={classes['footer-footer']}>
                <div className={classes.focus}>
                    <span><img src={home} alt='Home icon'/></span>
                    <p>Home</p>
                </div>
                <div>
                    <span><img src={transaction} alt='Transaction icon'/></span>
                    <p>Transaction</p>
                </div>
                <div>
                    <span><img src={profile} alt='Profile icon'/></span>
                    <p>Profile</p>
                </div>
            </footer>
        </Fragment>
    );
};
export default Footer;