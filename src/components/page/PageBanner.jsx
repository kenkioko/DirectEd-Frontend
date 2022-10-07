import React from 'react';
import Container from 'react-bootstrap/Container';

function PageBanner(props) {
    return (
        <Container fluid className="p-0">
            {props.banner &&
                <img
                    className="w-100"
                    height="150"
                    src={props.banner.src}
                    alt={props.banner.alt}
                />
            }
        </Container>
    );
}

export default PageBanner;