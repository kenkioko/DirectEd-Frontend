import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function DonationAmount(props) {
    const amounts = [1000, 500, 100, "custom"];
    const amount_btn_style = {width: "10%"};
    const donate_btn_style = {width: "15%"};

    return (
        <Container className="my-5 py-3">
            <div className="text-center mt-5">
                <h4 className="text-capitalize">Select Donation Amount</h4>
            </div>

            <div className="d-flex justify-content-center py-5">
                {amounts.map((amount, idx) => (
                    <Button variant="secondary" size="lg" className="mx-2" style={amount_btn_style}>
                        {amount !== 'custom' && '₳'}{amount}
                    </Button>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <Button variant="primary" style={donate_btn_style}>
                    Donate
                </Button>
            </div>
        </Container>
    )
}

export default DonationAmount;