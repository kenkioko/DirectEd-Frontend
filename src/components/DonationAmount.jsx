import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
            <Container className="my-5 py-3">
                <div className="text-center py-2">
                    <h4 className="text-capitalize">Select Donation Amount</h4>
                </div>

                <div className="d-flex justify-content-center py-4">
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

                {this.state.amount && (
                    <div className="d-flex flex-column py-3">
                        <div className="d-flex flex-column align-self-center w-50 px-5">
                            <p>Convert to ADA: 337238842192374ADA</p>
                            <p>Total fees: $0.47473838299373744857584999373494</p>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center py-3">
                            <NFT
                                token={token_img}
                                display={() => this.toogleNFT(true)}
                            />

                            <p className="p-2 mx-auto">
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
            </Container>
        );
    }

}

export default DonationAmount;