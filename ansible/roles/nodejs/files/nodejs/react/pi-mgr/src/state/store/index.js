import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../registerSagas';

import rootSaga  from '../../content/dependency-admin/DependencyAdmin.saga';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';
// import DataGridReducer from '../../components/datagrid/DataGridReducer';
// import DependencyAdminReducer from '../../content/dependency-admin/DependencyAdminReducer';

import MainPageReducer from '../main-page/reducers';
import DependenciesReducer from '../dependencies/reducers';

const reducer = combineReducers({
  // datagrid: DataGridReducer,
  // dependencies: DependencyAdminReducer,
  mainpage: MainPageReducer,
  dependencies: DependenciesReducer,
  form: formReducer,
})
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

registerWithMiddleware(sagaMiddleware);

