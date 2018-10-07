import { connect } from 'react-redux';
import DependencyScreen from './DependencyScreen';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
  }
}


const DependencyScreenLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProp,
)(DependencyScreen))

export default DependencyScreenLink