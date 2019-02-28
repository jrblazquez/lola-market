import * as TYPES from '../types';
import categories from '../../../../../servers/mocks/categories.json';

const INITIAL_STATE = {
  isOpened: true,
  categories: categories.categories.map(category => ({
    id: category.id,
    icon: category.icon,
    name: category.name,
    isSelected: false,
    isExpanded: false,
    sections: category.categories.map(category => ({
      id: category.id,
      name: category.name,
      isSelected: false,
      isExpanded: false,
    })),
  })),
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TYPES.CLOSE_CATEGORIES:
      return Object.assign({}, state, {
        isOpened: false,
      });
    case TYPES.EXPAND_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories.map(category => ({
          ...category,
          isExpanded: category.id === action.payload.id,
        })),
      });
    case TYPES.COLLAPSE_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories.map(category => ({
          ...category,
          isExpanded: false,
        })),
      });
    case TYPES.SELECT_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories.map(category => ({
          ...category,
          isSelected: category.id === action.payload.id,
          sections: category.sections.map(category => ({
            ...category,
            isSelected: category.id === action.payload.id,
          })),
        })),
      });
    default:
    return state;
  }
}

export default reducer;