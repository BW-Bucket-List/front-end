import React from 'react';
import { Card, Image, Modal, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import '../scss/BucketCard.scss';
import loginPic from '../Images/LoginPic.jpg';

//import LoginPic from '../Images/LoginPic.jpg';

function BucketCard (props) {
    // name and isPrivate?(boolean) passed as props
    const {name, isPrivate} = props;
    return (
        <Card key={'1'} className='bucket-card'>
        <Image src={loginPic} wrapped ui={false} />
        <Card.Content>
            <h2>Bucket List</h2>
            <Card.Header>{'Title: ' + name}</Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>{'isPrivate: ' + isPrivate}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
            <BookingButton land={props.land} />
        </Card.Content> */}
        </Card>
    )
}

export default BucketCard;