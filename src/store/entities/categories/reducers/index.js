import { Record, Map } from 'immutable';
import mock from '../../../../../servers/mocks/categories.json';

const Model = Record({
  id: 16,
  shortcut: "frutas-y-verduras",
  name: "Frutas y verduras",
  picture: "https:\/\/api.comprea.com\/bundles\/asset\/category\/bg_header_003.jpg",
  icon: "https:\/\/api.comprea.com\/bundles\/asset\/category\/ic_category_018.png",
  categories: Map(),
});

const getCategories = categories => categories.reduce((categories, category) => {
  return categories.set(category.id, Model(category));
}, Map());

// SAGAS TO RESCUE
const getInitialState = categories => getCategories(categories);

const reducer = (state = getInitialState(mock.categories), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;