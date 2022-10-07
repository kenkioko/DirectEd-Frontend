import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class DonationAmount extends Component {

    constructor(props) {
        super(props);
        this.state = { amount: null };
    }

    setAmount = (amount, e) => {
        this.setState({ amount: amount });
    };

    render() {
        const amounts = [1000, 500, 100, "custom"];

        return (
            <Container className="my-5 py-3">
                <div className="text-center mt-5">
                    <h4 className="text-capitalize">Select Donation Amount</h4>
                </div>

                <div className="d-flex justify-content-center py-5">
                    {amounts.map((amount, idx) => (
                        <Button
                            key={idx}
                            variant={this.state.amount === amount ? "primary" : "secondary"}
                            size="lg"
                            className="mx-2 w-10"
                            onClick={(e) => this.setAmount(amount, e)}
                        >
                            {amount !== 'custom' && '₳'}{amount}
                        </Button>
                    ))}
                </div>

                <div className="d-flex justify-content-center">
                    <Button
                        variant="primary"
                        href="/confirmation"
                        className="w-15"
                        disabled={this.state.amount > 0 ? false : true}
                    >
                        Donate
                    </Button>
                </div>
            </Container>
        );
    }

}

export default DonationAmount;