import React from 'react';
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
    return (
        <Container className="my-5 py-3">
            <div className="d-flex justify-content-center my-5">
                <Card className="bg-secondary rounded w-50 p-3">

                    {Object.keys(fields).map((key) => (
                        <DonationDetails key={key}  field={{
                            text: fields[key],
                            value: props.details[key],
                        }} />
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