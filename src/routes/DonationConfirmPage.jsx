import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";

class DonationConfirmPage extends Component {
    render() {
        const body = (
            <div className="donation-amount">
                Donation Confirm Page
            </div>
        );

        return (
            <PageBase
                title="Confirmation"
                body={body}
            />
        )
    }
}

export default DonationConfirmPage;