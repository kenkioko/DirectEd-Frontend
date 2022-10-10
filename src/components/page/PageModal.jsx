import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'

function PageModal(props) {
    const modal_content = (
        <>
            {props.header && (
                <Modal.Header closeButton className="border-0 align-items-baseline">
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
                <Modal.Footer className="border-0">
                    {props.footer}
                </Modal.Footer>
            )}
        </>
    );

    const dialog = () => (
        <ModalDialog
            size={props.size}
            centered={true}
            contentClassName="rounded-4"
        >
            {props.content}
        </ModalDialog>
    );

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop={props.backdrop}
            size={props.size}
            centered={true}
            keyboard={false}
            dialogAs={props.content && dialog}
        >
            {!props.content && modal_content}
        </Modal>
    );
}

export default PageModal;