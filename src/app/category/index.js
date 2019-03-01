import Category from './components/';
import { connect } from 'react-redux';
import { selectors } from '../../store/ui/market';
import { selectors as categorySelector } from '../../store/ui/category';

const mapStateToProps = state => {
  return {
    category: categorySelector.getCategory(state),
    items: selectors.getItems(state),
  }
};

export default connect(mapStateToProps)(Category);