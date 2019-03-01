import { createSelector } from 'reselect'

const getMarketId = state => state.ui.shop.get('market');
const getMarkets = state => state.entities.markets;

export const getMarket = createSelector(
  getMarketId,
  getMarkets,
  (id, markets) => {
    const market = markets.get(String(id));
    return market ? market : {}
  },
);

const getCategoryId = state => state.ui.shop.get('category');
const getCategories = state => state.entities.categories;

export const getCategory = createSelector(
  getCategoryId,
  getCategories,
  (id, categories) => {
    const category = categories.get(String(id));
    return category ? category: {}
  },
);

export const getItems = state => state.entities.items;
