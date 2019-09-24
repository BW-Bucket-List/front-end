import React, { useEffect } from 'react';
import axios from 'axios';
import BucketCard from './BucketCard';

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
        <div>
            {bucketLists?
            bucketLists.map(bucket => (
                <BucketCard 
                name={bucket.name}
                isPrivate={bucket.isPrivate}/>
            ))
            : null }
        </div>
    );
}

export default BucketList;