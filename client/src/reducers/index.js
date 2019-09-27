import {LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER_START, REGISTER_USER_SUCCESS, CREATE_BUCKET_START, CREATE_BUCKET_SUCCESS, EDIT_BUCKET_START, EDIT_BUCKET_SUCCESS, DELETE_BUCKET_START, DELETE_BUCKET_SUCCESS, CREATE_ITEM_START, CREATE_ITEM_SUCCESS, EDIT_ITEM_START, EDIT_ITEM_SUCCESS, DELETE_ITEM_START, DELETE_ITEM_SUCCESS, GET_BUCKET_START, GET_BUCKET_SUCCESS } from '../actions';



const initialState = {
  isFetching: false,
  isAuth: false,
  error: '',
  //user:{all data from GET USER by ID OR from LOGIN}
  user:{}
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
      console.log(action.payload, "User info Stored in Payload After Login");
      return{
        ...state,
        isAuth: true,
        isFetching: false,
        user:action.payload
      };
    case REGISTER_USER_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case REGISTER_USER_SUCCESS:
     // console.log(action.payload, 'hello from register');
      return{
        ...state,
        isAuth: true,
        isFetching: false
      }
    case GET_BUCKET_START:

      return{
        ...state,
        isAuth: true
      }
      case GET_BUCKET_SUCCESS:
        console.log('update user info with their lists', action.payload)
        return{
          ...state,
          user:action.payload
        }
    default: 
      return state;
  }

};