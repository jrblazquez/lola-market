import { combineReducers, createStore } from 'redux';
import categories  from './categories';
import items  from './items';
import markets  from './markets';

const reducer = combineReducers({
  categories,
  items,
  markets,
});

export const configureStore = () => createStore(reducer);

export default reducer;