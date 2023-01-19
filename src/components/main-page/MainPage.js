import { Fragment } from "react";
import Header from "./Header";
import Transaction from "./Transaction/Transaction";
const MainPage = () => {
    return (
        <Fragment>
            <Header />
            <Transaction />
        </Fragment>
    );
};
export default MainPage;
