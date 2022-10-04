import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function PageTitle(props) {
    return (
        <Container className="py-3">
            {props.back &&
                <Button variant="secondary" className="mx-auto text-uppercase" href={props.back.url}>
                    Back to 
                    {props.back.name &&
                        <span>{props.back.name}</span>
                    }
                </Button>
            }

            {props.title &&
                <div className="page-title">
                    <h1 className="text-center text-capitalize">
                        {props.title}
                    </h1>
                </div>
            }
        </Container>
    );
}

export default PageTitle;