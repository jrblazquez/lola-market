import * as TYPES from '../types';

export const goHome = () => ({
  type: TYPES.GO_HOME,
  payload: {}
});

export const goMarket = ({ marketName }) => ({
  type: TYPES.GO_MARKET,
  payload: {
    marketName,
  }
});

export const goMarketCategory = ({ marketName, categoryName }) => ({
  type: TYPES.GO_MARKET_CATEGORY,
  payload: {
    marketName,
    categoryName,
  }
});

export const goMarketCategorySubcategory = ({ marketName, categoryName, subcategoryName }) => ({
  type: TYPES.GO_MARKET_CATEGORY_SUBCATEGORY,
  payload: {
    marketName,
    categoryName,
    subcategoryName,
  }
});