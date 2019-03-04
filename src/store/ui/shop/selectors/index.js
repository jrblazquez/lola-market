import { createSelector } from 'reselect'
import { Map, List } from 'immutable';
import { goMarketCategorySubcategory } from '../../../location/actions';

export const getAllMarketsById = state => state.entities.markets.byId;
export const getAllMarketsByPostalCode = state => state.entities.markets.byPostalcode;
export const getAllCategoriesById = state => state.entities.categories.byId;
export const getAllCategoriesByMarket = state => state.entities.categories.byMarket;
export const getAllItemsById = state => state.entities.items.byId;
export const getAllItemsIdByFeaturedCategories = state => state.entities.items.byFeaturedCategories;

export const getPostalCode = state => state.ui.shop.get('postalcode');

export const getMarketsByPostalCode = createSelector(
  getPostalCode,
  getAllMarketsById,
  getAllMarketsByPostalCode,
  (postalcode, markets, marketsByPostalcode) => {
    if(!marketsByPostalcode.get(String(postalcode))) return null;
    return marketsByPostalcode.get(String(postalcode)).map(marketId => markets.get(marketId))
  },
);

export const getMarketId = state => state.ui.shop.get('market');
export const getMarket = createSelector(
  getMarketId,
  getAllMarketsById,
  (id, markets) => {
    const market = markets.get(id);
    return market ? market : {}
  },
);

export const getCategoryId = state => state.ui.shop.get('category');
export const getCategory = createSelector(
  getCategoryId,
  getAllCategoriesById,
  (id, categories) => {
    const category = categories.get(id);
    return category ? category : {}
  },
);

export const getSubcategoryId = state => state.ui.shop.get('subcategory');
export const getSubcategory = createSelector(
  getSubcategoryId,
  getAllCategoriesById,
  (id, categories) => {
    const category = categories.get(id);
    return category ? category : {}
  },
);

export const getItemsOfMarket = createSelector(
  getAllItemsById,
  getAllCategoriesByMarket,
  getAllCategoriesById,
  getMarketId,
  getAllItemsIdByFeaturedCategories,
  (items, categoriesByMarket, categories, marketID, itemsByCategories) => {
    if(!categoriesByMarket.get(marketID)) return List();
    return categoriesByMarket.get(marketID).map(categoryID => {
      const category = categories.get(categoryID);
      const categoryItems = itemsByCategories.get(categoryID);
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        items: categoryItems ? categoryItems.map(item => items.get(item)) : List(),
      }
    });
  }
);

export const getItemsOfCategory = createSelector(
  getAllItemsById,
  getAllCategoriesById,
  getCategoryId,
  getAllItemsIdByFeaturedCategories,
  (items, categories, categoryID, itemsByCategories) => {
    if(!categories.get(categoryID)) return List();
    return categories.get(categoryID).categories.map(categoryID => {
      const category = categories.get(categoryID);
      const categoryItems = itemsByCategories.get(categoryID);
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        items: categoryItems ? categoryItems.map(item => items.get(item)) : List(),
      }
    });
  }
);

export const getItemsOfSubcategory = createSelector(
  getAllItemsById,
  getSubcategory,
  getAllItemsIdByFeaturedCategories,
  (items, subcategory, itemsByCategories) => {
    const categoryItems = itemsByCategories.get(subcategory.id);
    return List([{
      id: subcategory.id,
      name: subcategory.name,
      icon: subcategory.icon,
      items: categoryItems ? categoryItems.map(item => items.get(item)) : List(),
    }]);
  }
);

export const getCategoriesBySelectedMarket = createSelector(
  getAllCategoriesByMarket,
  getAllCategoriesById,
  getMarket,
  (categoriesByMarket, categories, market) => {
    if(!categoriesByMarket.get(market.id)) return List();
    return categoriesByMarket.get(market.id).map(categoryID => {
      const category = categories.get(categoryID);
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        categories: category.categories.map(subcategoryID => {
          const subcategory = categories.get(subcategoryID);
          return {
            id: subcategory.id,
            name: subcategory.name,
            icon: subcategory.icon,
            shortcut: ({
              marketName: market.shortcut,
              categoryName: category.shortcut,
              subcategoryName: subcategory.shortcut,
            }),
            categories: List(),
          }
        })
      }
    });
  }
);