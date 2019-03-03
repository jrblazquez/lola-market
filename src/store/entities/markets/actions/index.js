import * as TYPES from '../types';

export const getMarketsRequest = (postalcode) => ({
  type: TYPES.GET_MARKETS_REQUEST,
  payload: {
    postalcode,
  }
});

export const getMarketsSucceeded = markets => ({
  type: TYPES.GET_MARKETS_SUCCEEDED,
  payload: {
    markets,
  }
});

export const getMarketsFailed = error => ({
  type: TYPES.GET_MARKETS_FAILED,
  error,
});

