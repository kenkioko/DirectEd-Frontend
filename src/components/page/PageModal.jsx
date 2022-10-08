import React from 'react';
import Modal from 'react-bootstrap/Modal';

function PageModal(props) {
    const modal_content = (
        <>
            {props.header && (
                <Modal.Header closeButton>
                    <Modal.Title className="w-100">
                        {props.header}
                    </Modal.Title>
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
        </>
    );

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            size={props.size}
            backdrop={props.backdrop}
            keyboard={false}
            centered
        >
            {props.content
                ? props.content
                : modal_content
            }
        </Modal>
    );
}

export default PageModal;