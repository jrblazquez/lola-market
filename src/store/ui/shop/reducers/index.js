import { Record, List } from 'immutable';
import * as TYPES from '../types';

const Model = Record({
  postalcode: 28010,
  market: null,
  category: null,
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
      return state.set('categories', List([action.payload.id]));
    case TYPES.COLLAPSE_CATEGORY:
      return state.set('categories', List());
    case TYPES.SET_MARKET:
      return state.set('market', action.payload.id)
    
    case TYPES.SELECT_CATEGORY:
      return state
        .set('category', action.payload.id)
        .set('categories', List(action.payload.parents));
    
    case TYPES.CHANGE_MARKET:
        return state
          .set('market', action.payload.marketId);
    case TYPES.CHANGE_CATEGORY:
        return state
          .set('category', action.payload.categoryId)
          .set('categories', List([action.payload.categoryId]));
    default:
    return state;
  }
}

export default reducer;