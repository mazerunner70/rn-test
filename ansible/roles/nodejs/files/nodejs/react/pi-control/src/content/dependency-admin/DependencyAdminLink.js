import { connect } from 'react-redux';
import DependencyAdmin from './DependencyAdmin';

const mapStateToProps = (state, ownProps) => {
  return {
    dependencies: state.dependencies
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {

  }
}


const DependencyAdminLink = connect(
  mapStateToProps,
  mapDispatchToProp,
)(DependencyAdmin)

export default DependencyAdminLink