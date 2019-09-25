import {axiosWithAuth} from '../utils/axiosWithAuth';
import BucketList from '../components/BucketList';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const CREATE_BUCKET_START = 'CREATE_BUCKET_START';
export const CREATE_BUCKET_SUCCESS = 'CREATE_BUCKET_SUCCESS';
export const CREATE_BUCKET_FAILURE = 'CREATE_BUCKET_FAILURE';

export const EDIT_BUCKET_START = 'EDIT_BUCKET_START';
export const EDIT_BUCKET_SUCCESS = 'EDIT_BUCKET_SUCCESS';
export const EDIT_BUCKET_FAILURE = 'EDIT_BUCKET_FAILURE';

export const DELETE_BUCKET_START = 'DELETE_BUCKET_START';
export const DELETE_BUCKET_SUCCESS = 'DELETE_BUCKET_SUCCESS';
export const DELETE_BUCKET_FAILURE = 'DELETE_BUCKET_FAILURE';

export const CREATE_ITEM_START = 'CREATE_ITEM_START';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

export const EDIT_ITEM_START = 'EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const loginUser = (credentials) => dispatch =>{
  console.log(credentials);
  dispatch({type: LOGIN_USER_START});
  axiosWithAuth()
    .post('/auth/login',credentials)
    .then(res =>{
      console.log(res);
      localStorage.setItem('token', res.data.token)
    })
}

export const registerUser = (credentials) => dispatch =>{
  console.log('registerCreds', credentials);
  dispatch({type: REGISTER_USER_START});
  axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res =>{
      console.log('registerRes', res);
      localStorage.setItem('token', res.data.token)
    })
}

export const createBucket = () => dispatch =>{
  dispatch({type: CREATE_BUCKET_START});
  axiosWithAuth()
   .post()
   .then(res =>{
     console.log('createBucket res', res);
     
   }) 
}

export const editBucket = () => dispatch =>{
  dispatch({type: EDIT_BUCKET_START});
  axiosWithAuth()
    .put()
    .then(res =>{
      console.log('editBucket put request', res);
    })
}

export const deleteBucket = () => dispatch =>{
  dispatch({type: DELETE_BUCKET_START});
  axiosWithAuth()
    .delete()
    .then(res =>{
      console.log('deleteBucket res', res);
    })
}

export const createItem = () => dispatch =>{
  dispatch({type: CREATE_ITEM_START});
  axiosWithAuth()
   .post()
   .then(res =>{
     console.log('createItem res', res);
     
   }) 
}

export const editItem = () => dispatch =>{
  dispatch({type: EDIT_ITEM_START});
  axiosWithAuth()
    .put()
    .then(res =>{
      console.log('editItem put request', res);
    })
}

export const deleteItem = () => dispatch =>{
  dispatch({type: DELETE_ITEM_START});
  axiosWithAuth()
    .delete()
    .then(res =>{
      console.log('deleteItem res', res);
    })
}
