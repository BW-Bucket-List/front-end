import React, { useEffect } from 'react';
import axios from 'axios';
import BucketCard from './BucketCard';
import '../scss/BucketList.scss';

function BucketList (props) {
    // bucketList, setServerError state to be passed down as props
    const {bucketLists, setBucketLists, setServerError} = props;

    // define backend server URL
    const backendURL = '';

    useEffect(() => {
        axios.get(backendURL)
        .then(response => {
            //to be changed with backend data
            setBucketLists(response.data);
        })
        .catch(err => {
            //set server error message
            setServerError(err.message);
        })
    },[])

    return (
        <section className='bucket-list'>
            {bucketLists?
            bucketLists.map(bucket => (
                <BucketCard
                key={bucket.id} 
                name={bucket.name}
                isPrivate={bucket.isPrivate}/>
            ))
            : null }
        </section>
    );
}

export default BucketList;