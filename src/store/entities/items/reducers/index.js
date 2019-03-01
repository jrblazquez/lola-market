import { Record, Map } from 'immutable';
import mock from '../../../../../servers/mocks/items_set_1.json';

const Model = Record({
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

// SAGAS TO RESCUE
const getInitialState = () => {
  const items = mock.items.reduce((items, item) => {
    items[item.uuid] = Model(item);
    return items;
  }, {})
  return Map(items);
}

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;