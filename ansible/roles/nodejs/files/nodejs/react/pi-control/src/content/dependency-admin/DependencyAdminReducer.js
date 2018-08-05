import { merge } from 'lodash';
import { INIT_DEPENDENCY_ADMIN } from './DependencyAdminActions';

export default (state, action) => {
      console.log('lll', action.type);
  switch (action.type) {
    case INIT_DEPENDENCY_ADMIN:
      return {
        ...state,
        dependencies: action.payload,
      };
    default:
      return {...state};
  }
}