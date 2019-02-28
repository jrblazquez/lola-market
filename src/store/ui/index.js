import { combineReducers, createStore } from 'redux';
import category  from './category';
import market  from './market';

const reducer = combineReducers({
  category,
  market,
});

export const configureStore = () => createStore(reducer);

export default reducer;