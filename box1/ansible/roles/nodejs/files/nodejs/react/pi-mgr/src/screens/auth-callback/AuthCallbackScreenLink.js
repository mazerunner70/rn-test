import { connect } from 'react-redux';
import AuthCallbackScreen from './AuthCallbackScreen';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
  }
}


const AuthCallbackScreenLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProp,
)(AuthCallbackScreen))

export default AuthCallbackScreenLink