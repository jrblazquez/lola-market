import * as TYPES from '../types';

export const closeAside = () => ({
  type: TYPES.CLOSE_ASIDE,
});

export const openAside = () => ({
  type: TYPES.OPEN_ASIDE,
});

export const expandCategory = (id) => ({
  type: TYPES.EXPAND_CATEGORY,
  payload: {
    id,
  }
});

export const collapseCategory = (id) => ({
  type: TYPES.COLLAPSE_CATEGORY,
  payload: {
    id,
  }
});

export const selectCategory = (id, parents) => ({
  type: TYPES.SELECT_CATEGORY,
  payload: {
    id,
    parents,
  }
});

export const changePostalCode = (postalcode) => ({
  type: TYPES.CHANGE_POSTALCODE,
  payload: {
    postalcode
  }
});


export const changeMarket = (marketId) => ({
  type: TYPES.CHANGE_MARKET,
  payload: {
    marketId
  }
});

export const changeCategory = (categoryId) => ({
  type: TYPES.CHANGE_CATEGORY,
  payload: {
    categoryId
  }
});
