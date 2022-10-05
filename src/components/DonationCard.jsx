import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function DonationDetails(props) {
    return (
        <div className="d-flex flex-column">
            <Card.Text>{props.data}</Card.Text>
            <Card.Text>{props.text}</Card.Text>
        </div>
    );
}

function DonationProgress(props) {
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

function DonationCard(props) {
    return (
        <Card className="mx-5 h-100 rounded border-1 bg-secondary">
            <Card.Img variant="top" className="h-25" src={props.donation.image} />
            <Card.Body className="text-center">
                <Card.Title className="text-capitalize py-2">
                    {props.donation.title}
                </Card.Title>

                <Card.Subtitle className="py-2">
                    <Card.Link href={props.donation.read_more_url}>Read More</Card.Link>
                </Card.Subtitle>

                <div className="d-flex justify-content-around border-bottom p-4">
                    <DonationDetails
                        text="Scholarships funded"
                        data={props.donation.scholarship_funded}
                    />

                    <span className="border" />

                    <DonationDetails
                        text="Remaining naming rights"
                        data={props.donation.remaining_rights}
                    />
                </div>

                <div className="p-3">
                    <DonationProgress
                        days_left={props.donation.days_left}
                        people_donated={props.donation.people_donated}
                        fund_balance={props.donation.fund_balance}
                        percent_donated={props.donation.percent_donated}

                    />
                </div>

                <div className="p-1">
                    <Button variant="primary" href="/donation">Donate Now</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DonationCard;