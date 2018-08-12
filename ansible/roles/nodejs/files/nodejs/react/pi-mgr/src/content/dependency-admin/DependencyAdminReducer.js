import { clone } from 'lodash';
import { RELOAD_DEPENDENCY_ADMIN, UPDATE_STORE, DA_DB_REQUEST,
        DA_DB_SUCCESS, DA_DB_FAILURE} from './DependencyAdminActions';

const initialState = [];

export default (state = initialState, action) => {
  console.log('lll', action.type);
  switch (action.type) {
    case RELOAD_DEPENDENCY_ADMIN:
      return [ ...action.payload ];
    case UPDATE_STORE:
      return updateDependencies(state, action);
    case DA_DB_REQUEST:
      
    default:
      return state;
  }
}


function updateDependencies(state, action) {
  console.log('ll=', action.payload);
  const row = action.payload;
  const dependencies = clone( state, true);
  const response = [ 
    ...dependencies.filter(dependency => dependency.name !== row.name), 
    row ];
  console.log(response);
  return response;
}