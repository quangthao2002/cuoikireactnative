import { createStore, combineReducers } from 'redux';
import itemsReducer from './reducers';

// const rootReducer = combineReducers({
//   items: itemsReducer,
// });

const store = createStore(itemsReducer);

export default store;