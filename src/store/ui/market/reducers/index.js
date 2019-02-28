import { Record } from 'immutable';

const Model = Record({
  id: 1,
  shortcut: 'mercadona',
  name: 'Mercadona',
  picture: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  icon: 'https:\/\/api.comprea.com\/bundles\/asset\/company\/ic_circled_mercadona.png',
  description: 'Productos habituales en las grandes superficies.',
  color: '0,122,56',
  special: false,
});

const reducer = (state = Model(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;