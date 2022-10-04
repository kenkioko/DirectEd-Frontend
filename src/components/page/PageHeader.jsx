import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../images/logo.svg';

function NavBrand() {
    return (
        <Navbar.Brand href="https://directed.dev/">
            <img
                src={logo}
                alt="DirectEd Logo"
                width="50"
                height="52.81"
                className="d-inline-block align-top"
            />

            <div class="d-inline-flex flex-column">
                <span>DirectEd</span>
                <span>Realising Potential</span>
            </div>
        </Navbar.Brand>
    );
}

function NavLinks() {
    return (
        <Nav className="me-auto">
            <Nav.Link className="text-uppercase" href="/pools">Scholarship Pools</Nav.Link>
            <Nav.Link className="text-uppercase" href="/progress">Scholar's Progress</Nav.Link>
            <Nav.Link className="text-uppercase" href="/transactions">Transactions</Nav.Link>
        </Nav>
    );
}

function ConnectBtn() {
    return (
        <Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

function PageHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container>
                <NavBrand />

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavLinks />
                    <ConnectBtn />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PageHeader;