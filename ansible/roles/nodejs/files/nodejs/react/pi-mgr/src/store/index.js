import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga  from '../content/dependency-admin/DependencyAdmin.saga';
import reducer from '../reducers';


const sagaMiddleware = createSagaMiddleware();

const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
