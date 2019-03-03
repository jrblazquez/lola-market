import { Record, List } from 'immutable';
import * as TYPES from '../types';

const Model = Record({
  postalcode: 28010,
  market: 1,
  category: 16,
  categories: List(),
  isAsideOpened: false,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    case TYPES.CLOSE_ASIDE:
      return state.set('isAsideOpened', false);
    case TYPES.OPEN_ASIDE:
      return state.set('isAsideOpened', true);
    case TYPES.EXPAND_CATEGORY:
      console.log(state)
      return state.set('categories', List([action.payload.id]));
    case TYPES.COLLAPSE_CATEGORY:
      return state.set('categories', List());
    case TYPES.SELECT_CATEGORY:
      return state
        .set('category', action.payload.id)
        .set('categories', List(action.payload.parents));
    default:
    return state;
  }
}

export default reducer;