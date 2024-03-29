import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions';
import * as Api from '../../../api';

function* getToken() {
  try {
    const { token } = yield call(Api.getToken);
    yield put(actions.getTokenSucceeded(token));
  } catch (e) {
    yield put(actions.getTokenFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery('GET_TOKEN_REQUEST', getToken);
}

export default sagas;
