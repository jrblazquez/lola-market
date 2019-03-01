import { Record, Map } from 'immutable';
import mock from '../../../../../servers/mocks/categories.json';

const Model = Record({
  id: 16,
  shortcut: "frutas-y-verduras",
  name: "Frutas y verduras",
  picture: "https:\/\/api.comprea.com\/bundles\/asset\/category\/bg_header_003.jpg",
  icon: "https:\/\/api.comprea.com\/bundles\/asset\/category\/ic_category_018.png",
  categories: [],
});

// SAGAS TO RESCUE
const getInitialState = () => {
  const categories = mock.categories.reduce((categories, category) => {
    categories[category.id] = Model(category);
    return categories;
  }, {})
  return Map(categories);
}

const reducer = (state = getInitialState(), action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default reducer;