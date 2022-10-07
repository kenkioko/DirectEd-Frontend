import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function PoolDetails(props) {
    return (
        <div className="d-flex flex-column">
            <Card.Text>{props.data}</Card.Text>
            <Card.Text>{props.text}</Card.Text>
        </div>
    );
}

function PoolProgress(props) {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <Card.Text>{props.days_left} days left</Card.Text>
                <Card.Text>{props.people_donated} people have donated</Card.Text>
            </div>

            <div className="text-start">
                <ProgressBar variant="primary" now={props.percent_donated} />
                <Card.Text>${props.fund_balance} more to fund the next scholarship</Card.Text>
            </div>
        </div>
    );
}

function ScholarshipPool(props) {
    return (
        <Card className="mx-5 h-100 rounded border-1 bg-secondary">
            <Card.Img variant="top" className="h-25" src={props.pool.image} />
            <Card.Body className="text-center">
                <Card.Title className="text-capitalize py-2">
                    {props.pool.title}
                </Card.Title>

                <Card.Subtitle className="py-2">
                    <Card.Link href={props.pool.read_more_url}>Read More</Card.Link>
                </Card.Subtitle>

                <div className="d-flex justify-content-around border-bottom p-4">
                    <PoolDetails
                        text="Scholarships funded"
                        data={props.pool.scholarship_funded}
                    />

                    <span className="border" />

                    <PoolDetails
                        text="Remaining naming rights"
                        data={props.pool.remaining_rights}
                    />
                </div>

                <div className="p-3">
                    <PoolProgress
                        days_left={props.pool.days_left}
                        people_donated={props.pool.people_donated}
                        fund_balance={props.pool.fund_balance}
                        percent_donated={props.pool.percent_donated}

                    />
                </div>

                <div className="p-1">
                    <Button variant="primary" href="/donation">Donate Now</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ScholarshipPool;