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

export const changeSubcategory = (shortcut) => ({
  type: TYPES.CHANGE_SUBCATEGORY,
  payload: {
    shortcut,
  }
});

export const setMarket = id => ({
  type: TYPES.SET_MARKET,
  payload: {
    id
  }
});

export const setCategory = id => ({
  type: TYPES.SET_CATEGORY,
  payload: {
    id
  }
});

export const setSubcategory = id => ({
  type: TYPES.SET_SUBCATEGORY,
  payload: {
    id
  }
});