import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import ScholarshipPool from "../components/ScholarshipPool";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import { pools } from '../mock/data/scholarship_pools';

class ScholarshipPollsPage extends Component {
    render() {
        const body = (
            <Container>
                <CardGroup >
                    {pools.map((pool, idx) => (
                        <ScholarshipPool key={idx} pool={pool} />
                    ))}
                </CardGroup>
            </Container>
        );

        return (
            <PageBase
                activeKey="pools"
                title="Schorlaship Pools"
                body={body}
            />
        )
    }
}

export default ScholarshipPollsPage;