import { Record } from 'immutable';
import * as TYPES from '../types';

const Model = Record({
  token: null,
  postalcode: 28010,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    case TYPES.GET_TOKEN_SUCCEEDED:
      return state.set('token', action.payload.token);
    default:
    return state;
  }
}

export default reducer;