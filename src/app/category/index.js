import Category from './components/';
import { connect } from 'react-redux';
import { selectors, actions } from '../../store/ui/shop';

const mapStateToProps = state => {
  return {
    category: selectors.getCategory(state),
    items: selectors.getItems(state),
  }
};


const mapDispacthToProps = dispatch => ({
  openAside: () => dispatch(actions.openAside()),
});

export default connect(mapStateToProps, mapDispacthToProps)(Category);