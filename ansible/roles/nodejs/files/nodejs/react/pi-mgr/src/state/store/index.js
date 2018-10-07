import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../registerSagas';

import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

import MainPageReducer from '../main-page/reducers';
import DependenciesReducer from '../dependencies/reducers';

const reducer = combineReducers({
  mainpage: MainPageReducer,
  dependencies: DependenciesReducer,
  form: formReducer,
})
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

registerWithMiddleware(sagaMiddleware);

