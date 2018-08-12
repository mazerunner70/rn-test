import { combineReducers } from 'redux';
import DataGridReducer from '../components/datagrid/DataGridReducer';
import DependencyAdminReducer from '../content/dependency-admin/DependencyAdminReducer';

export default combineReducers({
  datagrid: DataGridReducer,
  dependencies: DependencyAdminReducer
})