import {axiosWithAuth} from '../utils/axiosWithAuth';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const GET_BUCKET_START = 'GET_BUCKET_START';
export const GET_BUCKET_SUCCESS = 'GET_BUCKET_SUCCESS';
export const GET_BUCKET_FAILURE = 'GET_BUCKET_FAILURE';

export const CREATE_ITEM_START = 'CREATE_ITEM_START';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';


export const loginUser = (credentials) => dispatch =>{
  console.log(credentials);
  dispatch({type: LOGIN_USER_START});
  axiosWithAuth()
    .post('/auth/login',credentials)
    .then(res =>{
      console.log(res);
      localStorage.setItem('token', res.data.token)
      dispatch({type:LOGIN_USER_SUCCESS, payload:res.data.user})
    })
    .catch(err =>{
      console.log(err);
    })
}

export const registerUser = (credentials) => dispatch =>{
  console.log('registerCreds', credentials);
  dispatch({type: REGISTER_USER_START});
  axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res =>{
      console.log('registerRes', res);
      localStorage.setItem('message', res.data.message)
    })
    .catch(err =>{
      console.log(err);
    })
}

export const getBucket = (user_id) => dispatch =>{
  dispatch({type: GET_BUCKET_START});
  axiosWithAuth()
    .get(`/user/${user_id}`)
    .then(res =>{
      console.log('user id inside GET BUCKET', user_id)
      console.log(res.data)
      dispatch({type:GET_BUCKET_SUCCESS, payload:res.data})
    })
    .catch(err =>{
      console.log(err)
    })
}

export const createItem = (bucket_list_id) => dispatch =>{
  dispatch({type: CREATE_ITEM_START});
  axiosWithAuth()
   .post(`/bucket/${bucket_list_id}/items`)
   .then(res =>{
     console.log('bucket id inside POST ITEM', bucket_list_id);
     console.log(res.data) 
     dispatch({type: CREATE_ITEM_SUCCESS, payload:res.data})
   })
   .catch(err =>{
    console.log(err);
  }) 
}


