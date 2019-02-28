import { combineReducers, createStore } from 'redux';
// import entitiesReducer  from './entities';
import uiReducer  from './ui';
import userReducer  from './user';
import categoriesReducer  from './categories/duck';

const rootReducer = combineReducers({
  // entitites: entitiesReducer,
  ui: uiReducer,
  user: userReducer,
  
  categories: categoriesReducer,
});

export const configureStore = () => createStore(rootReducer);

export default rootReducer;