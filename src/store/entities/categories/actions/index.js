import * as TYPES from '../types';

export const getCategoriesRequest = (marketId) => ({
  type: TYPES.GET_CATEGORIES_REQUEST,
  payload: {
    marketId,
  }
});

export const getCategoriesSucceeded = categories => ({
  type: TYPES.GET_CATEGORIES_SUCCEEDED,
  payload: {
    categories,
  }
});

export const getCategoriesFailed = error => ({
  type: TYPES.GET_CATEGORIES_FAILED,
  error,
});

