import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { PagePopover } from '../PagePopup';
import { routes } from '../../../config/config';

function Link(props) {
    const classname = (link) => {
        var classname = "text-uppercase text-white";

        if (props.activeKey === link) {
            classname += " fw-bold text-decoration-underline";
        }

        return classname;
    };

    return (
        <Nav.Link
            className={classname(props.link)}
            eventKey={props.link}
            href={routes[props.link].path}
        >
            {routes[props.link].nav_text}
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

    // const body = (
    //     <p className="fw-bold fs-5">
    //         The transaction page will be available 
    //         after a donation has been made.
    //     </p>
    // );

    return (
        <Nav>
            <PagePopover
                header={header}
                // body={body}
                overlay={link}
                trigger={['hover', 'focus']}
                placement="bottom"
            />
        </Nav>
    );
}

function NavLink(props) {
    const links = Object.keys(routes).filter(key => (
        routes[key].hasOwnProperty('nav_text')
    ));

    return (
        <Nav className="justify-content-center w-75" activeKey={props.activeKey}>
            {Object.values(links).map((key) => {
                const link = (
                    <Link
                        key={key}
                        link={key}
                        activeKey={props.activeKey}
                    />
                );

                return (key === 'transactions')
                    ? (<TransactionLink key={key} link={link} />)
                    : link
            })}
        </Nav>
    );
}

export default NavLink;