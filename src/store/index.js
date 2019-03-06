import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, {} from 'redux-saga';
import { createLogger } from 'redux-logger';
import tokenMiddleware from './utils/tokenMiddleware';
import routesReducer, { middleware as routesMiddleware, enhancer, initialDispatch } from './location';
import rootSagas from './sagas';
import entitiesReducer  from './entities';
import uiReducer from './ui';
import userReducer from './user';

const configureStore = () => {
  const loggerMiddleware = createLogger({});
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    user: userReducer,
    location: routesReducer,
  });

  const middlewares = [sagaMiddleware, routesMiddleware, tokenMiddleware, loggerMiddleware ];
  const store = createStore(
    rootReducer,
    compose(enhancer, applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSagas, initialDispatch);

  return store;
}

export default configureStore;