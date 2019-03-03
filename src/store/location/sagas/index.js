import { spawn, take } from 'redux-saga/effects'
import * as TYPES from '../types'
import { goMarket, goMarketCategory, goMarketSubcategory } from '../../ui/shop/sagas';

const routesMap = {
  [TYPES. GO_HOME]: goHome,
  [TYPES.GO_MARKET]: goMarket,
  [TYPES.GO_MARKET_CATEGORY]: goMarketCategory,
  [TYPES.GO_MARKET_CATEGORY_SUBCATEGORY]: goMarketSubcategory,
};

function* goHome () {
  yield console.log('Just Finished a Super Long API Call')
}

function* rootSaga () {
  while (true) {
    const {type} = yield take(Object.keys(routesMap));
    yield spawn(routesMap[type]);
  }
};

export default rootSaga;