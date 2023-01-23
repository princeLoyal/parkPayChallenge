import { Fragment } from "react";
import classes from './Header.module.css';
import wavyHand from '../../assests/mdi_hand-wave-outline.png';
import hiddenEye from '../../assests/Eye\,\ Hidden.png';
import notificationBell from '../../assests/clarity_notification-outline-badged.png';
const Header = () => {
    const weekDays = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = {
        currentBalance: 250000,
        weekDay: weekDays[new Date().getDay()],
        monthDay: new Date().getDate(),
        month: months[new Date().getMonth()]
    }
    return (
        <Fragment>
            <div>
            <header className={classes['header-header']}>
                <div className={classes['header-firstDiv']}>
                    <p>Welcome back,</p> 
                    <p>West 
                    <img src={wavyHand} className={classes['header-wavyhand']}/>
                    </p> 
                    <img src={notificationBell}  alt='notification'className={classes['header-bell']}/>
                </div>
            <div className={classes['header-secondDiv']}>
                <p>Current balance</p>
                <p> &#8358;{date.currentBalance}.00
                <img src={hiddenEye} alt='A hidden eye' 
                className={classes['header-hidden-eye']} />
                </p>
                <p>{date.weekDay}, {date.monthDay}th {date.month}</p>
            </div>
            </header>
            </div>
        </Fragment>
    );
};
export default Header;