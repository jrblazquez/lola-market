import { createSelector } from 'reselect'
import { Map, List } from 'immutable';

export const getPostalCode = state => state.ui.shop.get('postalcode');

export const getMarketId = state => state.ui.shop.get('market');
export const getMarkets = state => state.entities.markets.byId;
export const getMarket = createSelector(
  getMarketId,
  getMarkets,
  (id, markets) => {
    const market = markets.get(id);
    return market ? market : {}
  },
);

const getAllMarketsByPostalCode = state => state.entities.markets.byPostalcode;
export const getMarketsByPostalCode = createSelector(
  getPostalCode,
  getMarkets,
  getAllMarketsByPostalCode,
  (postalcode, markets, marketsByPostalcode) => {
    return marketsByPostalcode.get(String(postalcode)).map(marketId => markets.get(marketId))
  },
);

const getCategoryId = state => state.ui.shop.get('category');
export const getCategoriesSelected = state => state.ui.shop.get('categories');
export const getCategoriesById = state => state.entities.categories.byId;
const getCategoriesByMarket = state => state.entities.categories.byMarket;

const getCategories = createSelector(
  getMarketId,
  getCategoriesById,
  getCategoriesByMarket,
  getCategoryId,
  (marketId, categories, categoriesByMarket, categoryId) => {
    if(categoryId === null){
      const categoriesId = categoriesByMarket.get(String(marketId)) || Map();
      return categoriesId.map(categoryId => categories.get(categoryId));
    }
    else{
      if(categories.get(categoryId).categories.length > 0)
        return List(categories.get(categoryId).categories.map(category => categories.get(category.id)));
      return List([categories.get(categoryId)]);
    }
  }
);


const toCategory = (category, categorySelected, categoriesSelected, parents = []) => {
  const hasSubcategories = category.categories.length > 0;
  const isSelected = categoriesSelected.indexOf(category.id) !== -1 || (category.id === categorySelected && !hasSubcategories);
  return {
    id: category.id,
    name: category.name,
    icon: category.icon,
    isSelected,
    hasSubcategories,
    parents: parents,
    categories: isSelected ?
      category.categories.map(subcategory => toCategory(subcategory, categorySelected, categoriesSelected, parents.concat([category.id])))
      : null,
  };
}

export const getCategoriesAside = createSelector(
  getCategories,
  getCategoryId,
  getCategoriesSelected,
  (categories, categorySelected, categoriesSelected) => {
    return categories.valueSeq().map(category => toCategory(category, categorySelected, categoriesSelected))
  },
);

export const getCategory = createSelector(
  getCategoryId,
  getCategoriesById,
  (id, categories) => {
    const category = categories.get(id);
    return category ? category: {}
  },
);

export const getAllItemsById = state => state.entities.items.byId;
export const getAllItemsIdByFeaturedCategories = state => state.entities.items.byFeaturedCategories;
export const getFeaturedCategoriesWithItems = createSelector(
  getCategories,
  getAllItemsById,
  getAllItemsIdByFeaturedCategories,
  (categories, items, itemsByFeaturedCategories) => {
    return categories.valueSeq().map(category => {
      const categoryItems = itemsByFeaturedCategories.get(category.id);
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        items: categoryItems ? categoryItems.map(item => items.get(item)) : List(),
      }
    });
  },
);

export const getItems = state => state.entities.items.byId;
