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
