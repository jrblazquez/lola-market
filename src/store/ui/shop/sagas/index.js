import { call, put, takeEvery, select, take } from 'redux-saga/effects'
import * as actions from '../actions';
import { actions as categoriesActions, types as categoriesTypes } from '../../../entities/categories';
import { actions as marketsActions, types as marketsTypes } from '../../../entities/markets';
import { actions as itemsActions } from '../../../entities/items';
import * as selectors from '../selectors';
import { selectors as locationSelectors } from '../../../location';
import * as Api from '../../../../api';
import * as TYPES from '../types';

function* changePostalCode(action) {
  const { token, postalcode } = action.payload;
  try {
    const markets = yield call(Api.getMarkets, { token, postalcode });
    yield put(marketsActions.getMarketsSucceeded(markets));
    const marketId = markets.byPostalcode.get(String(postalcode)).first();
    yield put(actions.changeMarket(marketId));

    const categories = yield call(Api.getCategories, { token, marketId });
    yield put(categoriesActions.getCategoriesSucceeded(categories));
    //const categoryId = categories.byMarket.get(String(marketId)).first();
    yield put(actions.changeCategory());


  } catch (e) {
    //yield put(actions.getTokenFailed(e.message));
  }
}

function* getItems(action) {
  const { token, id } = action.payload;
  try {
    const marketId = yield select(selectors.getMarketId);
    const items = yield call(Api.getItems, { token, categoryId: id, marketId });
    yield put(itemsActions.getItemsSucceeded(items));
    yield put(actions.closeAside());

  } catch (e) {
    //yield put(actions.getTokenFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery(TYPES.CHANGE_POSTALCODE, changePostalCode);
  yield takeEvery(TYPES.SELECT_CATEGORY, getItems);
}

export function* goMarket(){
  const postalcode = yield select(selectors.getPostalCode);
  try {
    yield put(marketsActions.getMarketsRequest(postalcode));
    yield take(marketsTypes.GET_MARKETS_SUCCEEDED);
    const markets = yield select(selectors.getMarketsByPostalCode);
    const marketName = yield select(locationSelectors.getMarketName);
    const market = markets.find(market => market.shortcut === marketName);
    yield put(actions.setMarket(market.id));
    yield put(categoriesActions.getCategoriesRequest(market.id));
    yield put(itemsActions.getFeaturedRequest(market.id));
  } catch (e) {
    
  }
}

export function* goMarketCategory(){
  const postalcode = yield select(selectors.getPostalCode);
  try {
    yield put(marketsActions.getMarketsRequest(postalcode));
    yield take(marketsTypes.GET_MARKETS_SUCCEEDED);
    const markets = yield select(selectors.getMarketsByPostalCode);
    const marketName = yield select(locationSelectors.getMarketName);
    const market = markets.find(market => market.shortcut === marketName);
    yield put(actions.setMarket(market.id));
    
    yield put(categoriesActions.getCategoriesRequest(market.id));
    yield take(categoriesTypes.GET_CATEGORIES_SUCCEEDED);
    const categories = yield select(selectors.getCategoriesById);
    const categoryName = yield select(locationSelectors.getCategoryName);
    const category = categories.find(category => category.shortcut === categoryName);
    yield put(actions.setCategory(category.id));

    yield put(itemsActions.getFeaturedRequest(market.id, category.id));
  } catch (e) {
    
  }
}

export function* goMarketSubcategory(){
  const postalcode = yield select(selectors.getPostalCode);
  try {
    yield put(marketsActions.getMarketsRequest(postalcode));
    yield take(marketsTypes.GET_MARKETS_SUCCEEDED);
    const markets = yield select(selectors.getMarketsByPostalCode);
    const marketName = yield select(locationSelectors.getMarketName);
    const market = markets.find(market => market.shortcut === marketName);
    yield put(actions.setMarket(market.id));
    
    yield put(categoriesActions.getCategoriesRequest(market.id));
    yield take(categoriesTypes.GET_CATEGORIES_SUCCEEDED);
    const categories = yield select(selectors.getCategoriesById);
    const categoryName = yield select(locationSelectors.getCategoryName);
    const subcategoryName = yield select(locationSelectors.getSubCategoryName);

    const category = categories.find(category => category.shortcut === categoryName);
    const subcategory = categories.find(category => category.shortcut === subcategoryName);
    console.log(category, subcategory);

    yield put(actions.setCategory(subcategory.id));

    yield put(itemsActions.getItemsRequest(market.id, subcategory.id));
  } catch (e) {
    
  }
}

export default sagas;
