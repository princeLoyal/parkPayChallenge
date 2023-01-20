import { Fragment } from "react";
import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import Footer from './Footer';
import plus from '../../picturesAndFiles/Frame 1000001199.png';
import classes from './MainPage.module.css';
const MainPage = () => {
    return (
        <Fragment>
            <div className={classes.mainDiv}>
                <p className={classes.imgStyle}>
                    <img src={plus} alt='Add transaction' width='100'/>
                </p>
                <header>
                    <Header />
                </header>
                <main>
                <Transaction />
                </main>
                <footer>
                <Footer />
                </footer>
            </div>
        </Fragment>
    );
};
export default MainPage;
