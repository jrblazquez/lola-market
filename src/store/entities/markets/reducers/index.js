import { Record, Map } from 'immutable';
import * as TYPES from '../types';

export const Model = Record({
  id: 1,
  shortcut: 'mercadona',
  name: 'Mercadona',
  picture: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  icon: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  description: 'Productos habituales en las grandes superficies.',
  color: '0,122,56',
});

const getInitialState = Record({
  byId: new Map(),
  byPostalcode: new Map(),
});

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    case TYPES.GET_MARKETS_SUCCEEDED:
      return state
        .set('byId', action.payload.markets.byId)
        .set('byPostalcode', action.payload.markets.byPostalcode);
    default:
      return state;
  }
}

export default reducer;