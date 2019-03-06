import fetch from 'isomorphic-fetch';
import { Map, List } from 'immutable';
import { Model } from 'store/entities/items/reducers';

export default async ({ token, marketId, categoryId }) => {
  const url = `${API_URL}/v6/company/items?token=${token}&company_id=${marketId}&category_id=${categoryId}&offset=0&limit=100`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(({ items }) => {
    
    const byId = items.reduce((items, item) => {
      return items.set(item.uuid, new Model(item));
    }, Map());
  
    const byFeaturedCategories = Map().set(categoryId, List(items.map(item => item.uuid)));

    return {
      byId,
      byFeaturedCategories,
    };
  });
}