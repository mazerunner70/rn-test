import { connect } from 'react-redux';
import Dependencies from './Dependencies';
import * as actions from '../../state/dependencies/actions';
import * as selectors from '../../state/dependencies/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    dependencyList: selectors.getDependencyList(state)
  }
}

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    loadDependencies: () => dispatch(actions.loadDependencies()),
    onSubmit: e => dispatch(actions.submitDependency(e)),
    onDelete: (e, row) => dispatch(actions.deleteDependency(e, row))
  }
}


const DependenciesLink = connect(
  mapStateToProps,
  mapDispatchToProp,
)(Dependencies);

export default DependenciesLink