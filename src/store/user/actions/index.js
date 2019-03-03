import * as TYPES from '../types';

export const getTokenRequest = () => ({
  type: TYPES.GET_TOKEN_REQUEST,
});

export const getTokenSucceeded = token => ({
  type: TYPES.GET_TOKEN_SUCCEEDED,
  payload: {
    token,
  }
});

export const getTokenFailed = error => ({
  type: TYPES.GET_TOKEN_SUCCEEDED,
  error,
});

