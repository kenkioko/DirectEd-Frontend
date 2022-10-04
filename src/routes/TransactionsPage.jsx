import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";

class TransactionsPage extends Component {
    render() {
        const body = (
            <div className="transactions">
                transactions
            </div>
        );

        return (
            <PageBase body={ body } />
        )
    }
}

export default TransactionsPage;