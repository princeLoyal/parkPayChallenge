import { Fragment } from "react";
import Header from "./Header";
import Transaction from "./Transaction/Transaction";
import TransactionList from "./Transaction/TransactionList";
const MainPage = () => {
    return (
        <Fragment>
            <Header />
            <Transaction />
            <TransactionList />
        </Fragment>
    );
};
export default MainPage;
