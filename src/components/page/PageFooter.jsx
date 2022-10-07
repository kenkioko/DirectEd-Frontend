import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function FooterBtn(props) {
    return (
        <div className="mx-auto">
            <Button className="text-uppercase" variant="secondary" href={props.url}>
                {props.text}
            </Button>
        </div>
    );
}

function PageFooter(props) {
    return (
        <div className="fixed-bottom bg-primary">
            <Container className="d-flex justify-content-between py-2">
                <div className="d-flex w-50">
                    <FooterBtn
                        text="Need Help?"
                        url="https://directed.dev/"
                    />

                    <FooterBtn
                        text="Have a suggestion?"
                        url="https://directed.dev/"
                    />
                </div>

                <div className="text-white">
                    <p className="p-0 m-0"><span>Terms and Conditions</span> | <span>Privacy Policy</span></p>
                    <p className="p-0 m-0">&copy 2022 DirectEd. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}

export default PageFooter;