import Header from 'components/header';
import { connect } from 'react-redux';
import { actions as locationActions } from 'store/location';
import { actions } from 'store/ui/shop';

const mapStateToProps = state => ({

});

const mapDispacthToProps = dispatch => ({
  onClick: () => dispatch(actions.openAside()),
});

export default connect(mapStateToProps, mapDispacthToProps)(Header);