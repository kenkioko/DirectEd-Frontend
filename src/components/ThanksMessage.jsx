import React from 'react';
import PageModal from "../components/page/PageModal";
import Button from 'react-bootstrap/Button';

function ThanksMessage(props) {
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
            handleClose={props.hideThanks}
            header={header}
            body={body}
            footer={footer}
        />
    );
}

export default ThanksMessage;