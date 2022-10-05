import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import banner from "../images/banner.png";

class DonationConfirmPage extends Component {
    render() {
        const body = (
            <div className="donation-amount">
                Donation Confirm Page
            </div>
        );

        return (
            <PageBase
                title="Donate to"
                banner={banner}
                body={body}
            />
        )
    }
}

export default DonationConfirmPage;