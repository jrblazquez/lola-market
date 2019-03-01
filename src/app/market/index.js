import Market from './components/';
import { connect } from 'react-redux';
import { selectors } from '../../store/ui/market';
import { selectors as categorySelector } from '../../store/ui/category';

const mapStateToProps = state => {
  return {
    market: selectors.getMarket(state),
    category: categorySelector.getCategory(state),
  }
};

export default connect(mapStateToProps)(Market);