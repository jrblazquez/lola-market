
import { connect } from 'react-redux';
import { types as TYPES } from 'store/location';
import App from './components';
import Market from './components/market';
import Category from './components/category';
import Subcategory from './components/subcategory';
import NotFound from './components/notFound';

const routesMap = {
  [TYPES.GO_HOME]: NotFound,
  [TYPES.GO_MARKET]: Market,
  [TYPES.GO_MARKET_CATEGORY]: Category,
  [TYPES.GO_MARKET_CATEGORY_SUBCATEGORY]: Subcategory,
};

const mapStateToProps = state => ({
  Component: routesMap[state.location.type] ? routesMap[state.location.type] : NotFound,
});

export default connect(mapStateToProps)(App);
