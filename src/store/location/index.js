import { connectRoutes } from 'redux-first-router';
import * as actions from './actions';
import sagas from './sagas';
import routes from './routes';
import * as types from './types';

const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(
  routes,
  {
    initialDispatch: false,
  },
);

export { actions, sagas, routes, middleware, enhancer, types, initialDispatch };
export default reducer;