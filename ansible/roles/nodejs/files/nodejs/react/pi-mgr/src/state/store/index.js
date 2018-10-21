import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../registerSagas';

import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

import MainPageReducer from '../main-page/reducers';
import DependenciesReducer from '../dependencies/reducers';
import AuthReducer from '../auth/reducers';

const reducer = combineReducers({
  mainpage: MainPageReducer,
  dependencies: DependenciesReducer,
  form: formReducer,
  auth: AuthReducer,
})
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

registerWithMiddleware(sagaMiddleware);

