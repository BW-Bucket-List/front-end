import {LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER_START, REGISTER_USER_SUCCESS, CREATE_BUCKET_START, CREATE_BUCKET_SUCCESS, EDIT_BUCKET_START, EDIT_BUCKET_SUCCESS, DELETE_BUCKET_START, DELETE_BUCKET_SUCCESS, CREATE_ITEM_START, CREATE_ITEM_SUCCESS, EDIT_ITEM_START, EDIT_ITEM_SUCCESS, DELETE_ITEM_START, DELETE_ITEM_SUCCESS} from '../actions';

const initialState = {
  isFetching: false,
  isAuth: false,
  error: '',
  data: []
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