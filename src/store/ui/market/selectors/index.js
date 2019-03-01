import { createSelector } from 'reselect'

const getMarketId = state => state.ui.market.get('id');
const getMarkets = state => state.entities.markets;

export const getMarket = createSelector(
  getMarketId,
  getMarkets,
  (id, markets) => {
    const market = markets.get(String(id));
    return market ? market.toJS() : {}
  },
);

export const getItems = state => state.entities.items;