import React from 'react';
import Image from 'react-bootstrap/Image';
import PageModal from "./PageModal";
import play_circle from '../../images/icons/play_circle.svg'

const pointer = {
    cursor: 'pointer'
};

export function MediaThumbnail(props) {
    return (
        <div
            className="position-relative"
            onClick={props.play}
            style={pointer}
        >
            <Image
                src={play_circle}
                alt="Play"
                className="position-absolute top-50 start-50 translate-middle"
            />

            <Image
                src={props.thumbnail}
                alt="media thumbnail"
                className="w-100"
                rounded={true}
            />
        </div >
    );
}

export function MediaPlay(props) {
    const content = (
        <MediaThumbnail thumbnail={props.thumbnail} />
    )

    return (
        <PageModal
            show={props.show}
            handleClose={props.handleClose}
            content={content}
            size="lg"
        />
    );
}

export function NFT(props) {
    return (
        <Image
            onClick={props.display}
            src={props.token}
            alt="NFT token"
            rounded={true}
            style={pointer}
        />
    );
}

export function NFTDisplay(props) {
    const content = (
        <NFT token={props.token} />
    )

    return (
        <PageModal
            show={props.show}
            handleClose={props.handleClose}
            content={content}
            size="lg"
        />
    );
}