import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from '../../../../api';
import * as actions from '../actions';
import * as TYPES from '../types';

function* getMarket(action) {
  try {
    const markets = yield call(Api.getMarkets, action.payload);
    yield put(actions.getMarketsSucceeded(markets));
  } catch (e) {
    yield put(actions.getMarketsFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery(TYPES.GET_MARKETS_REQUEST, getMarket);
}

export default sagas;
