import { createSelector } from 'reselect'

const getMarketId = state => state.ui.shop.get('market');
const getMarkets = state => state.entities.markets.byId;

export const getMarket = createSelector(
  getMarketId,
  getMarkets,
  (id, markets) => {
    const market = markets.get(id);
    return market ? market : {}
  },
);

const getCategoryId = state => state.ui.shop.get('category');
export const getCategoriesSelected = state => state.ui.shop.get('categories');
export const getCategories = state => state.entities.categories;

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
  (categories, categorySelected, categoriesSelected) => categories.valueSeq().map(category => toCategory(category, categorySelected, categoriesSelected)),
);

export const getCategory = createSelector(
  getCategoryId,
  getCategories,
  (id, categories) => {
    const category = categories.get(id);
    return category ? category: {}
  },
);

export const getItems = state => state.entities.items;
