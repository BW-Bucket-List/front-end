import {axiosWithAuth} from '../utils/axiosWithAuth';

export const CREATE_BUCKET_START = 'CREATE_BUCKET_START';
export const CREATE_BUCKET_SUCCESS = 'CREATE_BUCKET_SUCCESS';
export const CREATE_BUCKET_FAILURE = 'CREATE_BUCKET_FAILURE';

export const EDIT_BUCKET_START = 'EDIT_BUCKET_START';
export const EDIT_BUCKET_SUCCESS = 'EDIT_BUCKET_SUCCESS';
export const EDIT_BUCKET_FAILURE = 'EDIT_BUCKET_FAILURE';

export const DELETE_BUCKET_START = 'DELETE_BUCKET_START';
export const DELETE_BUCKET_SUCCESS = 'DELETE_BUCKET_SUCCESS';
export const DELETE_BUCKET_FAILURE = 'DELETE_BUCKET_FAILURE';

export const createBucket = () => dispatch =>{
  dispatch({type: CREATE_BUCKET_START});
  axiosWithAuth()
   .post()
   .then(res =>{
     console.log('createBucket res', res); 
   })
   .catch(err =>{
     console.log(err);
   }) 
}

export const editBucket = () => dispatch =>{
  dispatch({type: EDIT_BUCKET_START});
  axiosWithAuth()
    .put()
    .then(res =>{
      console.log('editBucket put request', res);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const deleteBucket = () => dispatch =>{
  dispatch({type: DELETE_BUCKET_START});
  axiosWithAuth()
    .delete()
    .then(res =>{
      console.log('deleteBucket res', res);
    })
    .catch(err =>{
      console.log(err);
    })
}