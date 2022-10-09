import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function PageTitle(props) {
    return (
        <Container className="py-3 d-flex">
            {props.back &&
                <div className="back-btn">
                    <Button variant="secondary" size="lg" className="text-uppercase" href={props.back.url}>
                        Back to {' '}

                        <span>
                            {props.back.text &&
                                <span>{props.back.text}</span>
                            }
                        </span>
                    </Button>
                </div>
            }

            {props.title &&
                <div className="page-title mx-auto">
                    <h1 className="display-1 text-center text-capitalize">
                        {props.title}
                    </h1>
                </div>
            }
        </Container>
    );
}

export default PageTitle;