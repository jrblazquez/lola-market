import Aside from './components/';
import { connect } from 'react-redux';
import { selectors, actions } from '../../store/ui/shop';

const mapStateToProps = state => {
  return {
    isOpened: state.ui.shop.isAsideOpened,
    market: selectors.getMarket(state)
  }
};

const mapDispacthToProps = dispatch => ({
  closeAside: () => dispatch(actions.closeAside()),
});

export default connect(mapStateToProps, mapDispacthToProps)(Aside);