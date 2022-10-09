import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { NFT, NFTDisplay } from './page/PageMedia';

import token_img from '../images/token.png';
import token_big_img from '../images/token_big.png';

class DonationAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: null,
            nft: false,
        };
    }

    setAmount = (amount) => {
        this.setState({
            amount: amount
        });

        this.props.hideBanner();
    };

    toogleNFT = (toogle) => {
        this.setState({
            nft: toogle
        });
    }

    render() {
        const amounts = [1000, 500, 100, "custom"];

        return (
            <Container>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex align-self-center py-3">
                        <h4 className="display-4 text-capitalize">
                            Select Donation Amount
                        </h4>
                    </div>

                    <div className="d-flex align-self-center w-50 py-3">
                        {amounts.map((amount, idx) => (
                            <Col className="p-2">
                                <Button
                                    key={idx}
                                    variant={this.state.amount === amount ? "primary" : "mute-light"}
                                    size="lg"
                                    className="w-100 fw-bold text-capitalize"
                                    onClick={(e) => this.setAmount(amount, e)}
                                >
                                    {amount !== 'custom' && '₳'}{amount}
                                </Button>
                            </Col>
                        ))}
                    </div>

                    {this.state.amount && (
                        <div className="d-flex flex-column align-self-center w-50">
                            <div className="p-2">
                                <p>Convert to ADA: 337238842192374ADA</p>
                                <p>Total fees: $0.47473838299373744857584999373494</p>
                            </div>

                            <div className="d-flex flex-column align-items-center py-5">
                                <div className="p-3">
                                    <NFT
                                        token={token_img}
                                        display={() => this.toogleNFT(true)}
                                    />
                                </div>

                                <p className="p-2">
                                    Click to view the exclusive NFT you will receive with your donation
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="d-flex justify-content-center py-3">
                        <Button
                            variant="primary"
                            href="/confirmation"
                            className="w-15"
                            disabled={this.state.amount > 0 ? false : true}
                        >
                            Donate
                        </Button>
                    </div>

                    <NFTDisplay
                        show={this.state.nft}
                        token={token_big_img}
                        handleClose={() => this.toogleNFT(false)}
                    />
                </div>
            </Container>
        );
    }

}

export default DonationAmount;