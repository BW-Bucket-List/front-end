import React, { useState, useEffect } from 'react';
import BucketCard from './BucketCard';
import '../scss/BucketList.scss';
import {connect} from 'react-redux';
import {getBucket} from '../actions';


function BucketList (props) {
    // bucketList, setServerError state to be passed down as props
    const {sharedBucketLists,privateBucketLists} = props.user;
console.log('User ID Props in Bucket',props.user)
    const[user,setUser]=useState(props.user)

    useEffect(() => {
        props.getBucket(2)
    },[])
    useEffect(()=>{
        setUser(props.user)
    },[props.user])
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
const mapStateToProps = state =>({
    user:state.user,
    isAuth:state.isAuth
  })

export default connect(mapStateToProps,{getBucket})(BucketList);