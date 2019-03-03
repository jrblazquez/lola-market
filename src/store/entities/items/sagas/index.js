import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from '../../../../api';
import * as actions from '../actions';
import * as TYPES from '../types';

function* getItems(action) {
  try {
    const items = yield call(Api.getItems, action.payload);
    yield put(actions.getItemsSucceeded(items));
  } catch (e) {
    yield put(actions.getItemsFailed(e.message));
  }
}

function* getFeatured(action) {
  try {
    const items = yield call(Api.getFeatured, action.payload);
    yield put(actions.getFeaturedSucceeded(items));
  } catch (e) {
    yield put(actions.getFeaturedFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery(TYPES.GET_ITEMS_REQUEST, getItems);
  yield takeEvery(TYPES.GET_FEATURED_REQUEST, getFeatured);
}

export default sagas;
