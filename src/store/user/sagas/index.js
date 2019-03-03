import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as actions from '../actions';
import { selectors } from '../../user';
import { actions as shopActions } from '../../ui/shop';
import * as Api from '../../../api';

function* getToken(action) {
  try {
    const { token } = yield call(Api.getToken);
    yield put(actions.getTokenSucceeded(token));
    const postalcode = yield select(selectors.getPostalCode);
    yield put(shopActions.changePostalCode(postalcode));
  } catch (e) {
    yield put(actions.getTokenFailed(e.message));
  }
}

function* sagas() {
  yield takeEvery('GET_TOKEN_REQUEST', getToken);
}

export default sagas;
