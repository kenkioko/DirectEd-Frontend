import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Toast from 'react-bootstrap/Toast';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import close_img from '../../images/icons/close_dark.svg';

export function PagePopover(props) {
    const popover = (
        <Popover className="w-100 shadow">
            {props.closeButton && (
                <Popover.Header as="div" className="display-6 d-flex bg-light border-0">
                    <Button
                        variant="light"
                        size="sm"
                        className="ms-auto p-0"
                        onClick={props.handleClose}
                    >
                        <Image src={close_img} alt="close" />
                    </Button>
                </Popover.Header>
            )}

            <Popover.Body className="bg-light rounded-bottom rounded-2">
                {props.header && (
                    <h5 className="display-5">
                        {props.header}
                    </h5>
                )}

                {props.body && (
                    <p>
                        {props.body}
                    </p>
                )}
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger={props.trigger}
            placement={props.placement}
            overlay={popover}
            show={props.show}
        >
            {props.overlay}
        </OverlayTrigger>
    );
}

export function PageToast(props) {
    return (
        <Toast
            bg="mute-light"
            show={props.show}
            onClose={props.handleClose}
        >
            <Toast.Header className="bg-mute-light text-dark border-0">
                {props.header
                    ? props.header
                    : (
                        <h6 className="display-6 fw-bold me-auto p-0 m-0">
                            {new Date().toLocaleTimeString()}
                        </h6>
                    )
                }
            </Toast.Header>

            <Toast.Body className="text-dark p-5 pt-2">
                {props.body}
            </Toast.Body>
        </Toast>
    );
}