export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_ITEMS = 'SET_ITEMS'; // Thêm constant SET_ITEMS


export const addItem = item => ({
    type: ADD_ITEM,
    payload: item,
});
export const fetchItems = () => {
    return (dispatch) => {
      fetch('https://655d45319f1e1093c599283e.mockapi.io/shop')
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: SET_ITEMS,
            payload: data,
          });
        });
    };
  };
export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id,
});
export const updateItem = item => ({
    type: UPDATE_ITEM,
    payload: item,
});