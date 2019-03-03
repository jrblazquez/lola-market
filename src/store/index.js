import 'regenerator-runtime/runtime';
import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, {} from 'redux-saga';
import { all, put } from 'redux-saga/effects';
import entitiesReducer  from './entities';
import uiReducer  from './ui';
import userReducer, { actions, sagas as userSagas }  from './user';

function* initial(){
  yield put(actions.getTokenRequest());
}

function* rootSagas(){
  yield all([
    userSagas(),
    initial(),
  ])
}

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  user: userReducer,
});

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}

export default rootReducer;