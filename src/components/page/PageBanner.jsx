import React from 'react';
import Container from 'react-bootstrap/Container';

function PageTitle(props) {
    return (
        <Container fluid>
            {props.banner &&
                <img
                    src={props.banner.url}
                    alt={props.banner.alt}
                />
            }
        </Container>
    );
}

export default PageTitle;