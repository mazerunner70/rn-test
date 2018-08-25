import { connect } from 'react-redux';
import DependencyAdmin from './DependencyAdmin';
import { initialiseDependencyAdmin} from './DependencyAdminActions';

const mapStateToProps = (state, ownProps) => {
  return {
    dependencies: state.dependencies
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    onInitialise() {
      dispatch(initialiseDependencyAdmin( [] ));
    },
  }
}


const DependencyAdminLink = connect(
  mapStateToProps,
  mapDispatchToProp,
)(DependencyAdmin)

export default DependencyAdminLink