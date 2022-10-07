import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ConnectWallet from './ConnectWallet';
import logo from '../../images/logo.svg';
import {routes} from '../../config/config';

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

function NavLinks(props) {
    const links = Object.keys(routes).filter(key => (
        routes[key].hasOwnProperty('nav_text')
    ));

    const classname = (key) => {
        var classname = "text-uppercase text-white";

        if (props.activeKey === key) {
            classname += " fw-bold text-decoration-underline";
        }

        return classname;
    };

    return (
        <Nav className="justify-content-center w-100" activeKey={props.activeKey}>
            {Object.values(links).map((key) => (
                <Nav.Link
                    className={classname(key)}
                    key={key}
                    eventKey={key}
                    href={routes[key].path}
                >
                    {routes[key].nav_text}
                </Nav.Link>
            ))}
        </Nav>
    );
}

function PageHeader(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container className="py-2">
                <NavBrand />

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLinks activeKey={props.activeKey}/>
                </Navbar.Collapse>

                <ConnectWallet />
            </Container>
        </Navbar>
    );
}

export default PageHeader;