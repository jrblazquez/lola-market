import { Record, Map } from 'immutable';
import * as TYPES from '../types';

export const Model = Record({
  uuid: 'R7wj29PHñ5',
  shortcut: 'aceite-oliva-sabor-suave-tapon-rojo',
  name: 'Aceite oliva sabor suave tapón rojo',
  measure: '1',
  brand: 'Hacendado',
  unit_of_measure: 'units',
  friendly_url: 'mercadona/aceites-salsas-y-condimentos/aceites-y-vinagres/aceite-oliva-sabor-suave-tapon-rojo',
  pictures: [
    'https://api.comprea.com/bundles/product/aceite-oliva-sabor-suave-tapon-rojo-de-mercadona.jpg',
  ],
  type: 'product',
  price: '10.84',
  max_price: 10.84,
});

const getInitialState = Record({
  byId: new Map(),
  //byMarket: new Map(),
});

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    case TYPES.GET_ITEMS_SUCCEEDED:
      return state
        .set('byId', action.payload.items.byId);
        //.set('byMarket', action.payload.categories.byMarket);
    default:
      return state;
  }
}

export default reducer;