import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import ScholarshipPool from "../components/ScholarshipPool";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import DonationHowTo from '../components/DonationHowTo';

import { pools } from '../mock/data/scholarship_pools';

class ScholarshipPollsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            howTo: false,
            showconnect: false,
        };
    }

    componentDidMount() {
        this.toogleHowTo(true);
        this.toogleConnect(true);
    }

    toogleHowTo = (show) => {
        this.setState({
            howTo: show
        });
    }

    toogleConnect = (show) => {
        this.setState({
            showconnect: show
        });
    }

    render() {
        const body = (
            <>
                <Container>
                    <CardGroup className="mx-5">
                        {pools.map((pool, idx) => (
                            <ScholarshipPool
                                key={idx}
                                pool={pool}
                                connectMessage={() => this.toogleConnect(true)}
                            />
                        ))}
                    </CardGroup>
                </Container>

                <DonationHowTo
                    show={this.state.howTo}
                    hideMessage={() => this.toogleHowTo(false)}
                    showMessage={() => this.toogleHowTo(true)}
                />
            </>
        );

        return (
            <PageBase
                activeKey="pools"
                title="Schorlaship Pools"
                body={body}
                showconnect={this.state.showconnect}
                toogleConnect={this.toogleConnect}
            />
        )
    }
}

export default ScholarshipPollsPage;