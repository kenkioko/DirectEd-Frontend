import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PageModal from "./page/PageModal";
import { MediaThumbnail, MediaPlay } from './page/PageMedia';

import how_to_img from '../images/how_to.png';
import how_to_big_img from '../images/how_to_big.png';

function DonationHowTo(props) {
    const [play, setPlay] = useState(false);
    const playMedia = (play) => {
        setPlay(play);

        play
            ? props.hideMessage()
            : props.showMessage();
    };

    const header = (
        <h4 className="text-center">
            How to donate
        </h4>
    );

    const body = (
        <div>
            <div className="text-center">
                <p className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="fs-5">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p className="fs-5">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="px-5 py-2">
                <MediaThumbnail
                    thumbnail={how_to_img}
                    play={() => playMedia(true)}
                />
            </div>
        </div>
    );

    const footer = (
        <div className="d-flex justify-content-center w-100">
            <Button size="lg" variant="secondary" href="https://directed.dev">
                Learn More
            </Button>
        </div>
    );

    return (
        <span>
            <PageModal
                show={props.show}
                handleClose={props.hideMessage}
                header={header}
                body={body}
                footer={footer}
            />

            <MediaPlay
                show={play}
                thumbnail={how_to_big_img}
                handleClose={() => playMedia(false)}
            />
        </span>
    );
}

export default DonationHowTo;