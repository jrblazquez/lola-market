import fetch from 'isomorphic-fetch';
import { Model } from '../../store/entities/markets/reducers';
import { Map, List } from 'immutable';
const API_URL =  'https://api.comprea.com';

export default async ({ token, postalcode }) => {
  const url = `${API_URL}/user/postalcode?token=${token}&postalcode=${postalcode}`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(({ markets }) => {
    
    const byId = markets.reduce((markets, market) => {
      return markets.set(market.id, new Model(market));
    }, Map());
  
    const byPostalcode = Map({
      [postalcode]: List(markets.map(market => market.id)),
    });

    return {
      byId,
      byPostalcode,
    };
  });
}