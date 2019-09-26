import React, { useEffect } from 'react';
import axios from 'axios';
import BucketCard from './BucketCard';
import '../scss/BucketList.scss';

function BucketList (props) {
    // bucketList, setServerError state to be passed down as props
    const {sharedBucketLists, setSharedBucketLists, privateBucketLists, 
        setPrivateBucketLists, setServerError} = props;

    // define backend server URL
    const backendURL = '';

    useEffect(() => {
        axios.get(backendURL)
        .then(response => {
            //to be changed with backend data
            setSharedBucketLists(response.sharedBucketLists);
            setPrivateBucketLists(response.privateBucketLists);
        })
        .catch(err => {
            //set server error message
            setServerError(err.message);
        })
    },[])

    return (
        <div className='buckets'>
        <section className='bucket-list'>
            {privateBucketLists?
            privateBucketLists.map(bucket => (
                <BucketCard
                key={bucket.bucket_list_id} 
                name={bucket.bucket_list_name}
                isPrivate={bucket.private}
                />
            ))
            : null }

            {sharedBucketLists?
            sharedBucketLists.map(bucket => (
                <BucketCard
                key={bucket.bucket_list_id} 
                name={bucket.bucket_list_name}
                isPrivate={bucket.private}
                />
            ))
            : null }
        </section>
        </div>
    );
}

export default BucketList;