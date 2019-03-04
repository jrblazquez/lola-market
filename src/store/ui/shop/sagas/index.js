import { call, put, takeEvery, select, take } from 'redux-saga/effects'
import * as actions from '../actions';
import { actions as categoriesActions, types as categoriesTypes } from '../../../entities/categories';
import { actions as marketsActions, types as marketsTypes } from '../../../entities/markets';
import { actions as itemsActions } from '../../../entities/items';
import * as selectors from '../selectors';
import * as TYPES from '../types';
import { selectors as locationSelectors } from '../../../location';

function* getMarketID(marketName){
  const postalcode = yield select(selectors.getPostalCode);

  let markets = yield select(selectors.getMarketsByPostalCode);
  if(markets === null){
    yield put(marketsActions.getMarketsRequest(postalcode));
    yield take(marketsTypes.GET_MARKETS_SUCCEEDED);
    markets = yield select(selectors.getMarketsByPostalCode);
  }
  const market = markets.find(market => market.shortcut === marketName);
  return market.id;
}

function* selectMarket(){
  const marketName = yield select(locationSelectors.getMarketName);
  
  //SET THE CURRENT MARKET
  const marketID = yield call(getMarketID, marketName);
  yield put(actions.setMarket(marketID));

  //SEARCH ALL THE CATEGORIES
  const categoriesByMarket = yield select(selectors.getAllCategoriesByMarket);
  if(!categoriesByMarket.get(marketID)){
    yield put(categoriesActions.getCategoriesRequest(marketID));
    yield take(categoriesTypes.GET_CATEGORIES_SUCCEEDED);
  }

  return marketID
}

function* getCategoryID(categoryName){
  const categories = yield select(selectors.getAllCategoriesById);
  const category = categories.find(category => category.shortcut === categoryName);
  return category.id;
}

function* selectCategory(){
  const categoryName = yield select(locationSelectors.getCategoryName);

  //SET THE CURRENT CATEGORY
  const categoryID = yield call(getCategoryID, categoryName);
  yield put(actions.setCategory(categoryID));

  return categoryID
}

function* selectSubcategory(){
  const subcategoryName = yield select(locationSelectors.getSubCategoryName);

  //SET THE CURRENT SUBCATEGORY
  const subcategoryID = yield call(getCategoryID, subcategoryName);
  yield put(actions.setSubcategory(subcategoryID));

  return subcategoryID
}

export function* goMarket(){
  const marketID = yield call(selectMarket);
  yield put(itemsActions.getFeaturedRequest(marketID));
  yield put(actions.closeAside());
}

export function* goMarketCategory(){
  const marketID = yield call(selectMarket);
  const categoryID = yield call(selectCategory);
  yield put(itemsActions.getFeaturedRequest(marketID, categoryID));
  yield put(actions.closeAside());
}

export function* goMarketSubcategory(){
  const marketID = yield call(selectMarket);
  const categoryID = yield call(selectCategory);
  const subcategoryID = yield call(selectSubcategory);

  const items = yield select(selectors.getAllItemsIdByFeaturedCategories);
  if(!items.get(subcategoryID)){
    yield put(itemsActions.getItemsRequest(marketID, subcategoryID));
  }
  yield put(actions.closeAside());
}

function* openAside(){
  window.document.body.style.overflow='hidden';
}

function* closeAside(){
  window.document.body.style.overflow='';
}

function* sagas() {
  yield takeEvery(TYPES.OPEN_ASIDE, openAside);
  yield takeEvery(TYPES.CLOSE_ASIDE, closeAside);
}

export default sagas;
