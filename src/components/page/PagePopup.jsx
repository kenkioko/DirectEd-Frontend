import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export function PagePopover(props) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{props.header}</Popover.Header>
            <Popover.Body>
                {props.body}
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