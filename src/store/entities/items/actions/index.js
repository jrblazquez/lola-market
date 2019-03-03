import * as TYPES from '../types';

export const getItemsRequest = (marketId, categoryId) => ({
  type: TYPES.GET_ITEMS_REQUEST,
  payload: {
    marketId,
    categoryId,
  }
});

export const getItemsSucceeded = items => ({
  type: TYPES.GET_ITEMS_SUCCEEDED,
  payload: {
    items,
  }
});

export const getItemsFailed = error => ({
  type: TYPES.GET_ITEMS_FAILED,
  error,
});

export const getFeaturedRequest = (marketId) => ({
  type: TYPES.GET_FEATURED_REQUEST,
  payload: {
    marketId,
  }
});

export const getFeaturedSucceeded = items => ({
  type: TYPES.GET_FEATURED_SUCCEEDED,
  payload: {
    items,
  }
});

export const getFeaturedFailed = error => ({
  type: TYPES.GET_FEATURED_FAILED,
  error,
});
