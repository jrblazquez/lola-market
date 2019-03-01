import { Record } from 'immutable';

const Model = Record({
  id: 2,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;