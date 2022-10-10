import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import clock_img from '../images/icons/clock.svg'

function PoolDetails(props) {
    return (
        <div className="d-flex flex-column w-50">
            <Card.Text className="fw-bold fs-5">
                {props.data}
            </Card.Text>

            <Card.Text>
                {props.text}
            </Card.Text>
        </div>
    );
}

function PoolProgress(props) {
    const [deadline, setDeadline] = useState(false);
    const toogleDeadline = (toogle) => setDeadline(toogle);

    return (
        <div>
            <div className="d-flex justify-content-between text-mute">
                <div className="d-flex">
                    <small>
                        <Image
                            src={clock_img}
                            alt="deadline"
                            className="me-2"
                            onMouseOver={() => toogleDeadline(true)}
                            onMouseOut= {() => toogleDeadline(false)}
                        />
                    </small>

                    {deadline && (
                        <Card.Text className="p-0 m-0">
                            <small>{props.days_left} days left</small>
                        </Card.Text>
                    )}
                </div>

                <Card.Text className="p-0 m-0">
                    <small>{props.people_donated} people have donated</small>
                </Card.Text>
            </div>

            <div className="text-start">
                <ProgressBar
                    className="my-1"
                    variant="success"
                    now={props.percent_donated}
                />

                <Card.Text className="fw-bold">
                    ${props.fund_balance} more to fund the next scholarship
                </Card.Text>
            </div>
        </div>
    );
}

function ScholarshipPool(props) {
    const handleClick = (e) => {
        if(!sessionStorage.getItem('isConnected')) {
            e.preventDefault();
            props.connectMessage();
        }
    }

    return (
        <Card className="mx-5 h-100 bg-secondary border-1 rounded shadow">
            <Card.Img variant="top" className="h-25" src={props.pool.image} />
            <Card.Body className="text-center">
                <Card.Title as="h3" className="display-3 text-capitalize">
                    {props.pool.title}
                </Card.Title>

                <Card.Subtitle>
                    <Card.Link href={props.pool.read_more_url}>Read More</Card.Link>
                </Card.Subtitle>

                <div className="d-flex justify-content-around border-bottom border-light p-3">
                    <PoolDetails
                        text="Scholarships funded"
                        data={props.pool.scholarship_funded}
                    />

                    <span className="border border-light" />

                    <PoolDetails
                        text="Remaining scholarship naming rights"
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

                <div className="p-3">
                    <Button
                        className="text-light fw-bold fs-5 px-4 "
                        variant="primary"
                        href="/donation"
                        onClick={(e) => handleClick(e)}
                    >
                        Donate Now
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ScholarshipPool;