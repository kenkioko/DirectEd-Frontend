import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ConnectWallet from './Header/ConnectWallet';
import NavLink from './Header/NavLink';
import logo from '../../images/logo.svg';

function NavBrand() {
    return (
        <Navbar.Brand href="https://directed.dev/">
            <img
                src={logo}
                alt="DirectEd Logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
            />

            <div className="d-inline-flex flex-column text-white px-2 fs-6">
                <span className="fw-bold">DirectEd</span>
                <span>Realising Potential</span>
            </div>
        </Navbar.Brand>
    );
}

function PageHeader(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container className="py-2">
                <NavBrand />

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLink activeKey={props.activeKey}/>
                </Navbar.Collapse>

                <ConnectWallet />
            </Container>
        </Navbar>
    );
}

export default PageHeader;