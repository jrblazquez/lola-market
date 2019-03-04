import Aside from './components/';
import { connect } from 'react-redux';
import { actions as locationActions } from '../../../store/location';
import { selectors, actions } from '../../../store/ui/shop';

const mapStateToProps = state => {
  return {
    isOpened: state.ui.shop.isAsideOpened,
    market: selectors.getMarket(state),
    postalcode: selectors.getPostalCode(state),
    categories: selectors.getCategoriesBySelectedMarket(state),
    categoryExpanded: state.ui.shop.categoryExpanded,
    categorySelected: state.ui.shop.subcategory,
  }
};

const mapDispacthToProps = dispatch => ({
  closeAside: () => dispatch(actions.closeAside()),
  expand: (id) => dispatch(actions.expandCategory(id)),
  collapse: (id) => dispatch(actions.collapseCategory(id)),
  select: (payload) => dispatch(locationActions.goMarketCategorySubcategory(payload)),
});

export default connect(mapStateToProps, mapDispacthToProps)(Aside);