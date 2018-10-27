import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
  }
}


const HomeScreenLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProp,
)(HomeScreen))

export default HomeScreenLink