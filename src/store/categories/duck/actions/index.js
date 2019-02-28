import * as TYPES from '../types';

export const closeCategories = () => ({
  type: TYPES.CLOSE_CATEGORIES,
})

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

export const selectCategory = (id) => ({
  type: TYPES.SELECT_CATEGORY,
  payload: {
    id,
  }
})
