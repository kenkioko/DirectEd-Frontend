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
            <div>
                <p className="fw-bold p-0 mb-1">Naivasha, Kenya</p>

                <p>
                    I'm a web developer with in-depth experience in UI/UX design. In a nutshell,
                    I create websites that help organizations address business challenges and meet their needs.
                    I manage everything from website navigation and layout to a company's web hosting and security architecture.
                </p>
            </div>

            <div className="d-flex">
                <p className="me-auto">
                    <a href="https://{userid}.github.io/{reponame}">
                        <small>{'https://{userid}.github.io/{reponame}'}</small>
                    </a>
                </p>

                <p>Social</p>
            </div>
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

function Progress(props) {
    const bars = 5;
    const bar_max = (100 / bars);
    const bars_full = Math.floor(props.progress / bar_max);

    return (
        <ProgressBar className="rounded-0">
            {Array.from(Array(bars).keys()).map((step) => {
                const percent = (step < bars_full)
                    ? bar_max
                    : (step === bars_full)
                        ? (props.progress % bar_max) 
                        : 0;

                return (
                    <ProgressBar
                        variant="primary"
                        key={step}
                        now={percent}
                        className="border-start border-end border-2 border-secondary"
                    />
                );
            })}
        </ProgressBar>
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
                                roundedCircle={true}
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
                    <Progress progress={props.student.progress} />
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
        <Container>
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-self-center w-75 py-3">
                    <h3 className="display-3 text-capitalize">
                        Progress Track for St. Peters High School
                    </h3>
                </div>

                <Card className="align-self-center border bg-secondary rounded w-75 p-3">

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