import React from 'react';
import Button from 'react-bootstrap/Button';
import PageModal from "./page/PageModal";
import { PageToast } from "./page/PagePopup";

export function ThanksMessage(props) {
    const header = (
        <h4 className="text-center">
            Thank you for your donation to DirectEd
        </h4>
    );

    const body = (
        <div className="text-center">
            <p className="fs-5">Your donation to St. Peter High School was confirmed.</p>
            <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
        </div>
    );

    const footer = (
        <div className="d-flex justify-content-center w-100">
            <Button size="lg" variant="primary" href="/progress">
                View Scholar's Progress
            </Button>
        </div>
    );

    return (
        <PageModal
            show={props.show}
            handleClose={props.hideMessage}
            header={header}
            body={body}
            footer={footer}
        />
    );
}

export function SubmittedMessage(props) {
    const body = (
        <p>
            Transaction received to the blockchain.
            You will receive an email from DirectEd.
        </p>
    );

    return (
        <PageToast
            show={props.show}
            handleClose={props.hideMessage}
            body={body}
        />
    );
}

export function ConfirmedMessage(props) {
    const body = (
        <p>
            Transaction confirmed on the blockchain.
        </p>
    );

    return (
        <PageToast
            show={props.show}
            handleClose={props.hideMessage}
            body={body}
        />
    );
}