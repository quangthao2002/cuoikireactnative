import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./actions";

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        
            case 'SET_ITEMS':
      return action.payload;
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        case UPDATE_ITEM:
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        default:
            return state;
    }
}

export default reducer;