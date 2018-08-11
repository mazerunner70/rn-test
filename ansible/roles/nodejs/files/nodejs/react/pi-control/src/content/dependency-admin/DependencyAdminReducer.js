import { clone } from 'lodash';
import { INIT_DEPENDENCY_ADMIN, UPDATE_STORE } from './DependencyAdminActions';

export default (state, action) => {
  console.log('lll', action.type);
  switch (action.type) {
    case INIT_DEPENDENCY_ADMIN:
      return [ ...action.payload ];
    case UPDATE_STORE:
      return updateDependencies(state, action);
    default:
      return state || [];
  }
}

function updateDependencies(state, action) {
  console.log('ll=', action.payload);
  const row = action.payload;
  const dependencies = clone( state, true);
  dependencies.filter(dependency => dependency.name !== row.name);
  const response = [ 
    ...dependencies.filter(dependency => dependency.name !== row.name), 
    row ];
  console.log(response);
  return response;
}