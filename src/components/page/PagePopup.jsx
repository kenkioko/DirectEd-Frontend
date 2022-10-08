import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export function PagePopover(props) {
    const popover = (
        <Popover id="popover-basic" className="w-100">
            {props.header && (
                <Popover.Header as="h3">
                    {props.header}
                </Popover.Header>
            )}

            {props.body && (
                <Popover.Body>
                    {props.body}
                </Popover.Body>
            )}
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
        <Toast show={props.show} onClose={props.handleClose}>
            <Toast.Header>
                {props.header
                    ? props.header
                    : (
                        <p className="me-auto fw-bold p-0 m-0">
                            {new Date().toLocaleTimeString()}
                        </p>
                    )
                }
            </Toast.Header>
            <Toast.Body>
                {props.body}
            </Toast.Body>
        </Toast>
    );
}