import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import DonationConfirm from "../components/DonationConfirm";

class DonationConfirmPage extends Component {
    render() {
        const body = (
            <DonationConfirm />
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