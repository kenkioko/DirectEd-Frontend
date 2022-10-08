import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function ProgressDetails(prop) {
    return (
        <Col xs={11} className="px-4">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Col>
    );
}

function CustomToggle({ eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const isCurrentEventKey = (activeEventKey === eventKey);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <Button variant="Secondary" onClick={decoratedOnClick}>
            {isCurrentEventKey ? 'Close' : 'More'}
        </Button>
    );
}

function ProgressTrack(props) {
    return (
        <div className="progress-track">
            <Row className="align-items-center text-capitalize border-top px-3 py-2">
                <Col xs={4}>
                    <Row className="align-items-center">
                        <Col xs={3}>
                            <Image
                                className="rounded-circle"
                                src={props.student.image}
                                alt={props.student.name}
                                width="50"
                                height="50"
                            />
                        </Col>

                        <Col className="text-start">
                            <p className="p-0 m-0">{props.student.name}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <ProgressBar variant="primary" now={props.student.progress} max="5" />
                </Col>
                <Col xs={2}>
                    <CustomToggle eventKey={props.idx} />
                </Col>
            </Row>
            <Accordion.Collapse eventKey={props.idx}>
                <Row className="justify-content-end">
                    <ProgressDetails />
                </Row>
            </Accordion.Collapse>
        </div>
    );
}

function ScholarsProgress(props) {
    return (
        <Container className="my-5 py-3">
            <div className="d-flex justify-content-center my-5">
                <Card className="border bg-secondary rounded w-75 p-3">

                    {/* Table header */}
                    <Row className="align-items-center text-center text-capitalize px-3">
                        <Col xs={4}>
                            <p>Name</p>
                        </Col>
                        <Col xs={6}>
                            <p>Milestone Progress</p>
                        </Col>
                        <Col xs={2} className="text-start">
                            <p className="px-2">Contact</p>
                        </Col>
                    </Row>

                    {/* Progress track */}
                    <Accordion flush>

                        {props.progress.map((student, idx) => (
                            <ProgressTrack key={idx} idx={idx} student={student} />
                        ))}

                    </Accordion>
                </Card>
            </div>
        </Container>
    )
}

export default ScholarsProgress;