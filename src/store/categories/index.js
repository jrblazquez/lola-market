import Categories from './components/categories';
import { connect } from 'react-redux';
import { actions } from './duck';

const mapStateToProps = state => {
  console.log(state)
  return {
    isOpened: state.categories.isOpened,
    categories: state.categories.categories,
  }
};

const mapDispacthToProps = dispatch => ({
  select: (id) => dispatch(actions.selectCategory(id)),
  expand: (id) => dispatch(actions.expandCategory(id)),
  collapse: (id) => dispatch(actions.collapseCategory(id)),
  close: () => dispatch(actions.closeCategories())
})

export default connect(mapStateToProps, mapDispacthToProps)(Categories);