import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { PagePopover } from '../PagePopup';
import { routes } from '../../../config/config';

const hasTransactions = sessionStorage.getItem('hasTransactions');

function Link(props) {
    const classname = (link) => {
        var classname = (props.activeKey === link)
            ? "text-light"
            : "text-mute-light";

        classname += " text-uppercase fs-5";
        if (props.activeKey === link) {
            classname += " fw-bold text-decoration-underline";
        }

        return classname;
    };

    const path = () => {
        return (props.data === 'transactions') && !hasTransactions
            ? null
            : routes[props.data].path
    }

    return (
        <Nav.Link
            className={classname(props.data)}
            eventKey={props.data}
            href={path()}
        >
            {routes[props.data].nav_text}
        </Nav.Link>
    );
}

function TransactionLink(props) {
    const link = (
        <span>{props.link}</span>
    );

    const header = (
        <span>
            The transaction page will be available
            after a donation has been made.
        </span>
    );

    return (
        <Nav>
            <PagePopover
                header={header}
                overlay={link}
                trigger={['hover', 'focus']}
                placement="bottom"
            />
        </Nav>
    );
}

function NavLink(props) {
    return (
        <Nav className="justify-content-center w-75" activeKey={props.activeKey}>
            {Object.keys(routes).map((key) => {
                if (routes[key].hasOwnProperty('nav_text')) {
                    const nav_link = routes[key];
                    const link = (
                        <Link
                            key={key}
                            data={key}
                            link={nav_link}
                            activeKey={props.activeKey}
                        />
                    );

                    return (key === 'transactions') && !hasTransactions
                        ? (<TransactionLink key={key} link={link} />)
                        : link
                }
                else
                    return null;
            })}
        </Nav>
    );
}

export default NavLink;