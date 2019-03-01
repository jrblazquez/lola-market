import { combineReducers, createStore } from 'redux';
import shop  from './shop';

const reducer = combineReducers({
  shop,
});

export const configureStore = () => createStore(reducer);

export default reducer;