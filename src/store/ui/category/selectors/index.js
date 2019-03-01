import { createSelector } from 'reselect'

const getCategoryId = state => state.ui.category.get('id');
const getCategories = state => state.entities.categories;

export const getCategory = createSelector(
  getCategoryId,
  getCategories,
  (id, categories) => {
    const category = categories.get(String(id));
    return category ? category.toJS() : {}
  },
);
