import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { PagePopover } from './PagePopup';

function ConnectWallet() {
    const body = (
        <p>
            <span>Need help? Follow this </span>
            <a href="https://directed.dev/">link</a>
        </p>
    );

    const overlay = (
        <Nav.Item>
            <Button variant="secondary" size="lg">
                Connect Wallet
            </Button>
        </Nav.Item>
    );

    return (
        <Nav>
            <PagePopover
                header="Start by connecting your wallet"
                body={body}
                overlay={overlay}
                trigger="click"
                placement="bottom"
            />
        </Nav>
    );
}

export default ConnectWallet;