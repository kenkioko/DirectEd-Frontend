import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { PagePopover } from '../PagePopup';
import { routes } from '../../../config/config';

function Link(props) {
    const hasTransaction = sessionStorage.getItem('hasTransaction');

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
        return (props.data === 'transactions') && !hasTransaction
            ? null
            : routes[props.data].path
    }

    return (
        <Nav.Link
            className={classname(props.data)}
            eventKey={props.data}
            href={path()}
            onMouseEnter={(props.data === 'transactions') && !hasTransaction
                ? () => props.handleMouseEnter(true)
                : null
            }
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
                closeButton={true}
                show={props.show}
                header={header}
                overlay={link}
                trigger={['hover', 'focus']}
                placement="bottom"
                handleClose={() => props.tooglePopup(false)}
            />
        </Nav>
    );
}

function NavLink(props) {
    const [show, setShow] = useState(false);
    const tooglePopup = (toogle) => setShow(toogle);
    const hasTransaction = sessionStorage.getItem('hasTransaction');

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
                            handleMouseEnter={tooglePopup}
                        />
                    );

                    return (key === 'transactions') && !hasTransaction
                        ? (
                            <TransactionLink
                                key={key}
                                link={link}
                                show={show}
                                tooglePopup={tooglePopup}
                            />
                        )
                        : link
                }
                else
                    return null;
            })}
        </Nav>
    );
}

export default NavLink;