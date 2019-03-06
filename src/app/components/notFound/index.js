import NotFound from './components/';
import { connect } from 'react-redux';
import { selectors, actions } from 'store/ui/shop';

const mapStateToProps = state => ({});

const mapDispacthToProps = dispatch => ({
  openAside: () => dispatch(actions.openAside()),
});

export default connect(mapStateToProps, mapDispacthToProps)(NotFound);