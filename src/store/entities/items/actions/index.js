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

