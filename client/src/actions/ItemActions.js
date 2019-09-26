import {axiosWithAuth} from '../utils/axiosWithAuth';

export const CREATE_ITEM_START = 'CREATE_ITEM_START';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

export const EDIT_ITEM_START = 'EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

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
