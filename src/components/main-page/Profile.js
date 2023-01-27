import { Fragment } from 'react';

import profilePic from '../../assests/Frame 1.png';
import logOut from '../../assests/ic_outline-logout.png';
import password from '../../assests/carbon_security.png';
import update from '../../assests/lucide_key.png';
import refer from '../../assests/material-symbols_share-outline.png';
import notification from '../../assests/mdi_bell-notification-outline.png';
import account from '../../assests/ph_credit-card-bold.png';
import profile from '../../assests/iconoir_profile-circled.png';
import contactUs from '../../assests/mdi-light_phone.png';
import classes from './Profile.module.css';
const Profile = props => {
    return (
        <div>
            <div className={classes['profile-fDiv']}>
                <div>
                    <p>My Account</p>
                    <p>Michael Afolabi Johnson</p>
                    <p>Wallet ID: 012562</p>
                </div>
                <img src={profilePic} alt='Profile pic'/>
            </div>
            <div className={classes['profile-sDiv']}>
                <div>
                    <img src={profile} alt='Profile'/>
                    <p>Profile Settings</p>
                </div>
                <div>
                    <img src={notification} alt='Notification settings'/>
                    <p>Notification Settings</p>
                </div>
                <div>
                    <img src={update} alt='Update security question'/>
                    <p>2FA:Update Security Question</p>
                </div>
                <div>
                    <img src={password} alt='Password'/>
                    <p>Pasword Settings</p>
                </div>
                <div>
                    <img src={account} alt='Account settings'/>
                    <p>Account Settings</p>
                </div>
                <div>
                    <img src={contactUs} alt='Contact us'/>
                    <p>Contact Us</p>
                </div>
                <div>
                    <img src={refer} alt='Refer and Earn'/>
                    <p>Refer and Earn</p>
                </div>
                <div>
                    <img src={logOut} alt='LogOut'/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    );
};
export default Profile;
