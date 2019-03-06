import { Record, List } from 'immutable';
import * as TYPES from '../types';

const Model = Record({
  postalcode: 28010,
  market: null,
  category: null,
  subcategory: null,
  isAsideOpened: false,
  categoryExpanded: null,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    case TYPES.CLOSE_ASIDE:
      return state.set('isAsideOpened', false);
    case TYPES.OPEN_ASIDE:
      return state
        .set('isAsideOpened', true)
        .set('categoryExpanded', state.get('category'));
    case TYPES.EXPAND_CATEGORY:
      return state.set('categoryExpanded', action.payload.id);
    case TYPES.COLLAPSE_CATEGORY:
      return state.set('categoryExpanded', null);
    case TYPES.SET_MARKET:
      return state
        .set('market', action.payload.id)
        .set('category', null)
        .set('subcategory', null);
    case TYPES.SET_CATEGORY:
      return state
        .set('category', action.payload.id)
        .set('subcategory', null);
    case TYPES.SET_SUBCATEGORY:
      return state.set('subcategory', action.payload.id);
    default:
    return state;
  }
}

export default reducer;