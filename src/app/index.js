
import { connect } from 'react-redux';
import { types as TYPES } from '../store/location';
import {NOT_FOUND} from 'redux-first-router';
import App from './components';
import Market from './components/market';

const routesMap = {
  [TYPES.GO_HOME]: Market,
  [TYPES.GO_MARKET]: Market,
  [TYPES.GO_MARKET_CATEGORY]: Market,
  [TYPES.GO_MARKET_CATEGORY_SUBCATEGORY]: Market,
  NOT_FOUND: Market,
};

const mapStateToProps = state => ({
  Component: routesMap[state.location.type] ? routesMap[state.location.type] : routesMap[NOT_FOUND],
});

export default connect(mapStateToProps)(App);
