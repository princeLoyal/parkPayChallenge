import { Fragment, useState } from "react";
import plus from '../../picturesAndFiles/Frame 1000001199.png';
import recieve from '../../picturesAndFiles/mingcute_transfer-3-line.png';
import make from '../../picturesAndFiles/carbon_send-alt.png';

import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import Footer from './Footer';
import classes from './MainPage.module.css';
import Modal from '../UI/Modal';
const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = bool => {
        setShowModal(bool);
    }
    return (
        <Fragment>
            <div className={classes.mainDiv}>
                <p className={classes.imgStyle} onClick={() => showModalHandler(true)}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                <header>
                    <Header />
                </header>
                <main>
                <Transaction />
                { showModal && <Modal onClose={showModalHandler}>
                    <div className={classes['main-page-div']}>
                        <p className={classes['main-page-div-p']}><img src={recieve} alt='payment Icon'/></p>
                        <div className={classes['main-page-div-1']}>
                            <p>Recieve payment</p>
                            <p>Recieve payment via bank transfer</p>
                        </div>
                    </div>
                    <div className={classes['main-page-div']}>
                        <p className={classes['main-page-div-p']}><img src={make} alt='Make payment' /></p>
                        <div className={classes['main-page-div-1']}>
                            <p>Make payment</p>
                            <p>send money to bank account</p>
                        </div>
                    </div>
                </Modal>}
                </main>
                <footer>
                <Footer />
                </footer>
            </div>
        </Fragment>
    );
};
export default MainPage;
