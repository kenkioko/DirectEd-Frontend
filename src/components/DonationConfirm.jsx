import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const fields = {
    address: 'From address',
    hash: 'Script hash',
    amount: 'ADA sent',
    token: 'Token received',
    fees: 'Total fees',
    deadline: 'Deadline',
};

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ConfirmButton(props) {
    return (
        <Button
            variant="primary"
            className="w-15"
            disabled={props.isLoading}
            onClick={!props.isLoading ? props.handleClick : null}
        >
            {props.confirmed
                ? 'Confirmed'
                : (props.isLoading ? 'Processing ...' : 'Confirm'
            )}
        </Button>
    );
}

function DonationDetails(props) {
    return (
        <Row className="align-items-center">
            <Col xs={4}>
                <p>{props.field.text}:</p>
            </Col>
            <Col xs={8}>
                <p>{props.field.value}</p>
            </Col>
        </Row>
    );
}


class DonationConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: null,
            confirmed: false,
        };
    }

    sendRequest = () => {
        if (this.state.confirmed) {
            this.props.showThanks();
        }
        else {
            if (!this.state.isLoading) {
                simulateNetworkRequest().then(() => {
                    this.setState({
                        isLoading: false,
                        confirmed: true,
                    });

                    this.props.showThanks();
                });
            }

            this.setState({
                isLoading: true,
            });
        }
    }

    render() {
        return (
            <Container className="my-5 py-3">
                <div className="d-flex justify-content-center my-5">
                    <Card className="bg-secondary rounded w-50 p-3">

                        {Object.keys(fields).map((key) => (
                            <DonationDetails key={key} field={{
                                text: fields[key],
                                value: this.props.details[key],
                            }} />
                        ))}

                    </Card>
                </div>

                <div className="d-flex justify-content-center">
                    <ConfirmButton
                        confirmed={this.state.confirmed}
                        isLoading={this.state.isLoading}
                        handleClick={(e) => this.sendRequest(e)}
                    />
                </div>
            </Container>
        )
    }
}

export default DonationConfirm;