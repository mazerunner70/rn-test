import { connect } from 'react-redux';
import AuthCallback from './AuthCallback';
import * as actions from '../../state/auth/actions';
import * as operations from '../../state/auth/operations';

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: operations.isAuthenticated(),
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    loadAuth: () => dispatch(actions.loadAuth()),
  }
}


const AuthCallbackLink = connect(
  mapStateToProps,
  mapDispatchToProp,
)(AuthCallback);

export default AuthCallbackLink