import Market from './components/';
import { connect } from 'react-redux';
import { selectors, actions } from '../../../store/ui/shop';

const mapStateToProps = state => {
  return {
    market: selectors.getMarket(state),
    categories: selectors.getFeaturedCategoriesWithItems(state),
  }
};

const mapDispacthToProps = dispatch => ({
  openAside: () => dispatch(actions.openAside()),
});

export default connect(mapStateToProps, mapDispacthToProps)(Market);