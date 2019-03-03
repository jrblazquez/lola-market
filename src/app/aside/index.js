import Aside from './components/';
import { connect } from 'react-redux';
import { selectors, actions } from '../../store/ui/shop';

const mapStateToProps = state => {
  return {
    isOpened: state.ui.shop.isAsideOpened,
    market: selectors.getMarket(state),
    categories: selectors.getCategoriesAside(state),
    categoriesSelected: selectors.getCategoriesSelected(state),
  }
};

const mapDispacthToProps = dispatch => ({
  closeAside: () => dispatch(actions.closeAside()),
  expand: (id) => dispatch(actions.expandCategory(id)),
  collapse: (id) => dispatch(actions.collapseCategory(id)),
  select: (id, parents) => dispatch(actions.selectCategory(id, parents)),
});

export default connect(mapStateToProps, mapDispacthToProps)(Aside);