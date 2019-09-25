import {LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER_START, REGISTER_USER_SUCCESS} from '../actions';

const initialState = {
  name: null,
  isFetching: false,
  isAuth: false,
  error: ''
  };


export const reducer = (state = initialState, action) =>{
  switch (action.type){
    case LOGIN_USER_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case LOGIN_USER_SUCCESS:
      console.log(action.payload, "hello");
      return{
        ...state,
        isAuth: true,
        isFetching: false
      };
    case REGISTER_USER_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case REGISTER_USER_SUCCESS:
      console.log(action.payload, 'hello from register');
      return{
        ...state,
        isAuth: true,
        isFetching: false
      }
    default: 
      return state;
  }

};