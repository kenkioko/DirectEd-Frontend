import React, { Component } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import PageBase from "../components/page/PageBase";
import DonationConfirm from "../components/DonationConfirm";
import {
    ThanksMessage,
    SubmittedMessage,
    ConfirmedMessage
} from "../components/DonationMessage";

import { details } from '../mock/data/donation_details';

class DonationConfirmPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thanks: false,
            submitted: false,
            confirmed: false,
        };
    }

    toogleThanks = (toogle) => {
        this.setState({
            thanks: toogle,
        });
    }

    toogleSubmitted = (toogle) => {
        this.setState({
            submitted: toogle,
        });
    }

    toogleConfirmed = (toogle) => {
        this.setState({
            confirmed: toogle,
        });
    }

    render() {
        const body = (
            <>
                <DonationConfirm
                    details={details}
                    showThanks={() => this.toogleThanks(true)}
                    showConfirmed={() => this.toogleConfirmed(true)}
                    showSubmitted={() => this.toogleSubmitted(true)}
                />

                <ThanksMessage
                    show={this.state.thanks}
                    hideMessage={() => this.toogleThanks(false)}
                />

                <ToastContainer className="p-3" position="middle-end">
                    <SubmittedMessage
                        show={this.state.submitted}
                        hideMessage={() => this.toogleSubmitted(false)}
                    />

                    <ConfirmedMessage
                        show={this.state.confirmed}
                        hideMessage={() => this.toogleConfirmed(false)}
                    />
                </ToastContainer>
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