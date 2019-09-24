import React from 'react';

function BucketCard (props) {
    // name and isPrivate?(boolean) passed as props
    const {name, isPrivate} = props;
    return (
        <div>
            <h2>Title: {name}</h2>
            <p>Private: {isPrivate.toString()}</p>
        </div>
    )
}

export default BucketCard;