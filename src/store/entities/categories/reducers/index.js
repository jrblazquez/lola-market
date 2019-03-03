import { Record, Map } from 'immutable';
import * as TYPES from '../types';

export const Model = Record({
  id: 16,
  shortcut: "frutas-y-verduras",
  name: "Frutas y verduras",
  picture: "https:\/\/api.comprea.com\/bundles\/asset\/category\/bg_header_003.jpg",
  icon: "https:\/\/api.comprea.com\/bundles\/asset\/category\/ic_category_018.png",
  categories: Map(),
});

const getInitialState = Record({
  byId: new Map(),
  byMarket: new Map(),
});

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    case TYPES.GET_CATEGORIES_SUCCEEDED:
      return state
        .set('byId', action.payload.categories.byId)
        .set('byMarket', action.payload.categories.byMarket);
    default:
      return state;
  }
}

export default reducer;