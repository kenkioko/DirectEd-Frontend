import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import DonationConfirm from "../components/DonationConfirm";

import { details } from '../mock/data/donation_details';

class DonationConfirmPage extends Component {
    render() {
        const body = (
            <DonationConfirm details={details}/>
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