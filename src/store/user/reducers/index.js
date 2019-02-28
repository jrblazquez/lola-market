import { Record } from 'immutable';

const Model = Record({
  token: null,
  postalcode: null,
});


const reducer = (state = Model(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;