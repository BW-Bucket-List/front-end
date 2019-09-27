import React from 'react';
import { Card, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../scss/BucketCard.scss';
import bucketPic from '../Images/bucketList.jpg';
// import Items from '../components/Items';
import {Link} from 'react-router-dom';

//import LoginPic from '../Images/LoginPic.jpg';

function BucketCard (props) {
    // name and isPrivate?(boolean) passed as props
    const {name, isPrivate} = props;
    return (
        <Card key={'1'} className='bucket-card'>
        <Image src={bucketPic} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{'Title: ' + name}</Card.Header>
            <Card.Meta></Card.Meta>
            {isPrivate > 0 ? <Card.Description>{'Status: Private'}</Card.Description> : 
            <Card.Description>{`Status:${isPrivate}`}</Card.Description>}
            {/* <Card.Description>{'isPrivate: ' + isPrivate}</Card.Description> */}
        </Card.Content>
        <Card.Content extra>
            <button><Link to='/items'>Open The List!</Link></button>
        </Card.Content>
        </Card>
    )
}

export default BucketCard;