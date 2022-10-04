import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function FooterBtn(props) {
    return (
        <Button
            className="mx-auto text-uppercase"
            variant="secondary"
            href={props.url}
        >{props.text}</Button>
    );
}

function PageFooter(props) {
    return (
        <div className="fixed-bottom bg-primary">
            <Container className="d-flex py-3">
                <FooterBtn
                    text="Need Help?"
                    url="https://directed.dev/"
                />

                <FooterBtn
                    text="Have a suggestion?"
                    url="https://directed.dev/"
                />

                <div>
                    <p><span>Terms and Conditions</span> | <span>Privacy Policy</span></p>
                    <p>&copy 2022 DirectEd. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}

export default PageFooter;