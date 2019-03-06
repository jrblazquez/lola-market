import fetch from 'isomorphic-fetch';
import { Map, List } from 'immutable';
import { Model } from 'store/entities/markets/reducers';

export default async ({ token, postalcode }) => {
  const url = `${API_URL}/v6/user/postalcode?token=${token}&postalcode=${postalcode}`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(({ services }) => {
    
    const markets = services.reduce((markets, service) => {
      return markets.concat(service.markets);
    }, []);

    const byId = markets.reduce((markets, market) => {
      return markets.set(market.id, new Model({ ...market, picture: market.companies[0].picture }));
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