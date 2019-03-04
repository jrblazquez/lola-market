import fetch from 'isomorphic-fetch';
import { Model } from '../../store/entities/categories/reducers';
import { Map, List } from 'immutable';
const API_URL =  'https://api.comprea.com';

export default async ({ token, marketId }) => {
  const url = `${API_URL}/company/categories?token=${token}&company_id=${marketId}`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(({ categories }) => {
    
    const byId = categories
      .reduce((categories, category) => {
        const subcategories = category.categories.reduce((categories, category) => categories.set(category.id, new Model(category)), Map());
        return categories
          .set(category.id, new Model({
            ...category,
            categories: List(category.categories.map(category=>category.id)),
          }))
          .merge(subcategories);
      }, Map())
  
    const byMarket = Map().set(marketId, List(categories.map(category => category.id)));

    return {
      byId,
      byMarket,
    };
  });
}