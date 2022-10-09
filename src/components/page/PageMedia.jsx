import React from 'react';
import Image from 'react-bootstrap/Image';
import PageModal from "./PageModal";

export function MediaThumbnail(props) {
    return (
        <div
            className="media-card d-flex justify-content-center align-items-center"
            onClick={props.play}
        >
            <Image
                thumbnail={true}
                src={props.thumbnail}
                alt="media thumbnail"
                className="media-thumbnail w-100"
            />
        </div>
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
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            onClick={props.display}
        >
            <Image
                thumbnail={true}
                src={props.token}
                alt="NFT token"
                className="media-thumbnail w-100"
            />
        </div>
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