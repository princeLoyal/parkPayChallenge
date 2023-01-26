import { Fragment } from 'react';
import home from '../../assests/majesticons_home-analytics.png';
import transaction from '../../assests/grommet-icons_transaction.png';
import profile from '../../assests/iconoir_profile-circled.png';
import classes from './Footer.module.css';
const Footer = props => {
    return (
        <Fragment>{console.log(props.focus)}
            <footer className={classes['footer-footer']}>
                <div className={props.focus === 'home' ? classes.focus : ''}>
                    <span><img src={home} alt='Home icon'/></span>
                    <p>Home</p>
                </div>
                <div className={props.focus === 'transaction'? classes.focus : ''}>
                    <span><img src={transaction} alt='Transaction icon'/></span>
                    <p>Transaction</p>
                </div>
                <div className={props.focus === 'profile'? classes.focus : ''}>
                    <span><img src={profile} alt='Profile icon'/></span>
                    <p>Profile</p>
                </div>
            </footer>
        </Fragment>
    );
};
export default Footer;