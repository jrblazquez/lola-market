import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, {} from 'redux-saga';
import tokenMiddleware from './utils/tokenMiddleware';
import { all, put } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import entitiesReducer  from './entities';
import uiReducer  from './ui';
import userReducer, { actions, sagas as userSagas }  from './user';
import { sagas as marketsSagas }  from './entities/markets'

function* initial(){
  yield put(actions.getTokenRequest());
}

function* rootSagas(){
  yield all([
    userSagas(),
    marketsSagas(),
    initial(),
  ])
}

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  user: userReducer,
});

export const configureStore = () => {
  const loggerMiddleware = createLogger({});
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, loggerMiddleware, tokenMiddleware];

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}

export default rootReducer;