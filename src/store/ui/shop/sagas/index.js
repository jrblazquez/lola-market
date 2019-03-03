import { call, put, takeEvery, select, take } from 'redux-saga/effects'
import * as actions from '../actions';
import { actions as categoriesActions } from '../../../entities/categories';
import { actions as marketsActions, types as marketsTypes } from '../../../entities/markets';
import { actions as itemsActions } from '../../../entities/items';
import * as selectors from '../selectors';
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
    const market = markets.find(market => market.shortcut === 'mercadona');
    yield put(actions.setMarket(market.id));
    yield put(categoriesActions.getCategoriesRequest(market.id));
    yield put(itemsActions.getFeaturedRequest(market.id));
  } catch (e) {
    
  }
}

export default sagas;
