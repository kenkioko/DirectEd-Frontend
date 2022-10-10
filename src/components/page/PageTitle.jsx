import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import back_img from '../../images/icons/back.svg';

function PageTitle(props) {
    return (
        <Container className="py-3 d-flex">
            {props.back &&
                <div className="back-btn">
                    <Button variant="light" size="lg"
                        className="text-uppercase fw-bold"
                        href={props.back.url}
                    >
                        <Image src={back_img} alt="Back To" />

                        {/* {props.back.text && (
                            <span className="px-2">
                                {' '} {props.back.text}
                            </span>
                        )} */}
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