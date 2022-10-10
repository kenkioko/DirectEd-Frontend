import React, { Component, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { PagePopover } from '../PagePopup';

import { simulateNetworkRequest } from '../../../mock/data/network_request';

function ConnectPopover(props) {
    const message = (
        <p>
            <span>Need help? Follow this </span>
            <a href="https://directed.dev/">link</a>
        </p>
    );

    const options = (
        <ListGroup variant="flush">
            {Array.from(Array(3).keys()).map((option, idx) => (
                <ListGroup.Item key={idx}>
                    <Button
                        variant="primary"
                        className="w-100"
                        onClick={props.connect}
                    >
                        Wallet {option}
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );

    const header = props.options
        ? "Select an option"
        : "Start by connecting your wallet.";

    const overlay = (
        <span>
            <ConnectBtn
                options={props.options}
                toogle={props.toogle}
                popup={props.popup}
            />
        </span>
    )

    return (
        <PagePopover
            closeButton={!props.options}
            show={props.show}
            header={header}
            body={props.options ? options : message}
            overlay={overlay}
            trigger={props.options ? "click" : ['hover', 'focus']}
            placement="bottom"
            handleClose={() => props.popup(false)}
        />
    );
}

function ConnectBtn(props) {
    const [options, setOptions] = useState(false);

    const handleClick = () => {
        props.toogle(!options);
        setOptions(!options);
    }

    const handleHover = (hover) => {
        if (!props.options) {
            props.popup(hover);
        }
    }

    return (
        <Nav.Item>
            <Button
                className="text-primary fw-bold fs-4 px-4"
                variant="secondary"
                size="lg"
                onClick={handleClick}
                onMouseEnter={() => handleHover(true)}
            >
                {props.connected
                    ? '$directEd'
                    : (props.loading ? 'Connecting' : 'Connect Wallet'
                    )}
            </Button>
        </Nav.Item>
    );
}

class ConnectWallet extends Component {
    constructor(props) {
        super(props);

        const isConnected = sessionStorage.getItem('isConnected');
        this.state = {
            isConnected: isConnected
                ? isConnected
                : false,
            isLoading: false,
            options: false,
            popup: props.show ?? false,
        };
    }

    componentDidMount() {
        if (this.props.show) {
            this.tooglePopup(this.props.show);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.show !== prevProps.show) {
            this.tooglePopup(this.props.show);
        }
    }

    tooglePopup = (toogle) => {
        if (!this.state.isConnected) {
            this.setState({
                popup: toogle
            });

            this.props.toogleShow(toogle)
        }
    }

    toogleOptions = (toogle) => {
        this.setState({
            options: toogle,
        });

        this.tooglePopup(toogle);
    }

    sendRequest = () => {
        if (!this.state.isLoading) {
            simulateNetworkRequest().then(() => {
                sessionStorage.setItem('isConnected', true);

                this.setState({
                    isLoading: false,
                    isConnected: true,
                });
            });
        }

        this.setState({
            isLoading: true,
        });
    }

    render() {
        return (
            <Nav>
                {this.state.isConnected || this.state.isLoading
                    ? (
                        <ConnectBtn
                            connected={this.state.isConnected}
                            loading={this.state.isLoading}
                        />
                    )
                    : (
                        <ConnectPopover
                            show={this.state.popup}
                            options={this.state.options}
                            connect={this.sendRequest}
                            popup={this.tooglePopup}
                            toogle={this.toogleOptions}
                        />
                    )
                }
            </Nav>
        );
    }
}
export default ConnectWallet;