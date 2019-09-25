import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = () => dispatch =>{
  dispatch({type: LOGIN_USER_START});
  axiosWithAuth()
    .post('/auth/login')
}