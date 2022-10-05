import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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

function DonationConfirm(props) {
    const fields = {
        address: {
            text: 'From address',
            value: 'addr93d9wek0wewjewas34asd3er4refsdfdsf',
        },
        hash: {
            text: 'Script hash',
            value: 'drewrfe4323423432432434sdasdds',
        },
        amount: {
            text: 'ADA sent',
            value: 500,
        },
        token: {
            text: 'Token received',
            value: 'asset4303asd',
        },
        fees: {
            text: 'Total fees',
            value: 0.1634,
        },
        deadline: {
            text: 'Deadline',
            value: '11/23/24',
        },
    };

    return (
        <Container className="my-5 py-3">
            <div className="d-flex justify-content-center my-5">
                <Card className="bg-secondary rounded w-50 p-3">

                    {Object.keys(fields).map((key) => (
                        <DonationDetails key={key} field={fields[key]} />
                    ))}

                </Card>
            </div>

            <div className="d-flex justify-content-center">
                <Button variant="primary" className="w-15">
                    Confirm
                </Button>
            </div>
        </Container>
    )
}

export default DonationConfirm;