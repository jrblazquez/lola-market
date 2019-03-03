import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from '../../../../api';
import * as actions from '../actions';
import * as TYPES from '../types';

function* getCategories(action) {
  try {
    const categories = yield call(Api.getCategories, action.payload);
    yield put(actions.getCategoriesSucceeded(categories));
  } catch (e) {
    yield put(actions.getCategoriesFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery(TYPES.GET_CATEGORIES_REQUEST, getCategories);
}

export default sagas;
