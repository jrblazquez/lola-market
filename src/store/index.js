import { combineReducers, createStore } from 'redux';
import categoriesReducer  from './categories/duck';

const rootReducer = combineReducers({
  categories: categoriesReducer
});

export const configureStore = () => createStore(rootReducer);

export default rootReducer;