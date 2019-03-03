import { all, put, call, take } from 'redux-saga/effects';
import { sagas as locationSagas } from '../location';
import { sagas as marketSagas } from '../../store/entities/markets';
import { sagas as categoriesSagas } from '../../store/entities/categories';
import { sagas as itemsSagas }  from '../../store/entities/items';
import { actions, types as TYPES, sagas as userSagas }  from '../user';

function* initial(initialDispatch){
  yield put(actions.getTokenRequest());
  yield take(TYPES.GET_TOKEN_SUCCEEDED);
  yield call(initialDispatch);
}

function* rootSagas(initialDispatch){
  yield all([
    locationSagas(),
    userSagas(),
    marketSagas(),
    categoriesSagas(),
    itemsSagas(),
    initial(initialDispatch),
  ])
}

export default rootSagas;