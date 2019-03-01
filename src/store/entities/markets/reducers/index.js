import { Record, Map } from 'immutable';
import postalcodes from '../../../../../servers/mocks/postalcode.json';

const Model = Record({
  id: 1,
  shortcut: 'mercadona',
  name: 'Mercadona',
  picture: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  icon: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  description: 'Productos habituales en las grandes superficies.',
  color: '0,122,56',
  special: false,
});

// SAGAS TO RESCUE
const getInitialState = () => {
  const markets = postalcodes.markets.reduce((markets, market) => {
    markets[market.id] = Model(market);
    return markets;
  }, {})
  return Map(markets);
}

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;