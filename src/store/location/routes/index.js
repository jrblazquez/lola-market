import * as TYPES from '../types';

const routes = {
  [TYPES.GO_HOME]: '/',
  [TYPES.GO_MARKET]: '/tienda/:marketName/',
  [TYPES.GO_MARKET_CATEGORY]: '/tienda/:marketName/:categoryName',
  [TYPES.GO_MARKET_CATEGORY_SUBCATEGORY]: '/tienda/:marketName/:categoryName/:subcategoryName',
};

export default routes;