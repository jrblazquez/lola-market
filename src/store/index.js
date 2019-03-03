import { combineReducers, createStore } from 'redux';
import entitiesReducer  from './entities';
import uiReducer  from './ui';
import userReducer  from './user';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  user: userReducer,
});

export const configureStore = () => createStore(rootReducer);

export default rootReducer;