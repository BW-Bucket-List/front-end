import React from 'react';
import {Modal, Button } from "semantic-ui-react";

function Items (props){
    const {entries, photos, videos, voices} = props;
    return (
        <Modal
            trigger={
            <Button color="grey" className="neutral">
                View Items
            </Button>
            }
        >
            <Modal.Header>BucketList Items</Modal.Header>
            {/* <img className="book-img" src={''} alt="" /> */}
            {entries.map((entry) => (
                <p>{entry}</p>
            ))}
            {photos.map((photo) => (
                <p>{photo}</p>
            ))}
            {videos.map((video) => (
                <p>{video}</p>
            ))}
            {voices.map((voice) => (
                <p>{voice}</p>
            ))}
        </Modal>
    )
}

export default Items;