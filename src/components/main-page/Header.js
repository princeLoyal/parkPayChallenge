import { Fragment } from "react";
import classes from './Header.module.css';
import wavyHand from '../../picturesAndFiles/mdi_hand-wave-outline.png';
import hiddenEye from '../../picturesAndFiles/Eye\,\ Hidden.png'
import notificationBell from '../../picturesAndFiles/clarity_notification-outline-badged.png';
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
            <header className={classes['header-header']}>
                <div className={classes['header-firstDiv']}>
                    <p>Welcome back,</p> 
                    <p>West</p> 
                    <img src={wavyHand} width='20' className={classes['header-wavyhand']}/>
                    <img src={notificationBell} width='40' className={classes['header-bell']}/>
                </div>
            <div className={classes['header-secondDiv']}>
                <p>Current balance</p>
                <p>#{date.currentBalance}.00
                <span><img src={hiddenEye} alt='A hidden eye' width='25'/></span>
                </p>
                <p>{date.weekDay}, {date.monthDay}th {date.month}</p>
            </div>
            </header>
        </Fragment>
    );
};
export default Header;