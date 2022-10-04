import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import DonationCard from "../components/DonationCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import { donations } from '../mock/data/scholarship_pools';

class ScholarshipPollsPage extends Component {
    render() {
        const body = (
            <Container>
                <CardGroup >
                    {donations.map((donation, idx) => (
                        <DonationCard key={idx} donation={donation} />
                    ))}
                </CardGroup>
            </Container>
        );

        return (
            <PageBase
                title="Schorlaship Pools"
                body={body}
            />
        )
    }
}

export default ScholarshipPollsPage;