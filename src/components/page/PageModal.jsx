import React from 'react';
import Modal from 'react-bootstrap/Modal';

function PageModal(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            size={props.size && "md"}
            backdrop="static"
            keyboard={false}
            centered
        >
            {props.header && (
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
            )}

            {props.body && (
                <Modal.Body>
                    {props.body}
                </Modal.Body>
            )}

            {props.footer && (
                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default PageModal;