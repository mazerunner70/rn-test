import { connect } from 'react-redux';
import RootScreen from './RootScreen';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
  }
}


const RootScreenLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProp,
)(RootScreen))

export default RootScreenLink;