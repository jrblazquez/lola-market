import { Record } from 'immutable';
import * as TYPES from '../types';

const Model = Record({
  market: 1,
  category: 2,
  isAsideOpened: true,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    case TYPES.CLOSE_ASIDE:
      return state.set('isAsideOpened', false);
    case TYPES.OPEN_ASIDE:
      return state.set('isAsideOpened', true);
    default:
    return state;
  }
}

export default reducer;