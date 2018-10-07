import { connect } from 'react-redux';
import RouterScreen from './RouterScreen';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
  }
}


const RouterScreenLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProp,
)(RouterScreen))

export default RouterScreenLink;