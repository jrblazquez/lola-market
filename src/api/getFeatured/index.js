import fetch from 'isomorphic-fetch';
import { Map, List } from 'immutable';
import { Model } from 'store/entities/items/reducers';

export default async ({ token, marketId, categoryId }) => {
  const url = `${API_URL}/v6/company/featured?token=${token}&company_id=${marketId}${ categoryId ? '&category_id='+categoryId : ''}`;

  return fetch(url, {
    method: 'GET',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(({ categories }) => {
    
    const items = categories.reduce((items, category) => {
      return items.concat(category.items);
    }, []);

    const byId = items.reduce((items, item) => {
      return items.set(item.uuid, new Model(item));
    }, Map());
  
    const byFeaturedCategories = categories.reduce((categories, category) => {
      return categories.set(category.id, List(category.items.map(item => item.uuid)));
    }, Map());

    return {
      byId,
      byFeaturedCategories,
    };
  });
}