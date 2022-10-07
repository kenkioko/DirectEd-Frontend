import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import ThanksMessage from "../components/ThanksMessage";
import DonationConfirm from "../components/DonationConfirm";

import { details } from '../mock/data/donation_details';

class DonationConfirmPage extends Component {
    constructor(props) {
        super(props);
        this.state = { thanks: false };
    }

    showThanks = () => {
        this.setState({
            thanks: true,
        });
    }

    hideThanks = () => {
        this.setState({
            thanks: false,
        });
    }

    render() {
        const body = (
            <>
                <DonationConfirm details={details} showThanks={this.showThanks}/>
                <ThanksMessage show={this.state.thanks} hideThanks={this.hideThanks} />
            </>
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