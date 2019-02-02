import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { registerWithMiddleware } from '../registersagas';

import AuthReducer from '../auth/reducers'
import ReportREducer from '../reports/reducers';

const reducer = combineReducers({
  mainPage: (state = {}, action) => {return {}},
  auth: AuthReducer,
  reports: ReportREducer,
})

const sagaMiddleware = createSagaMiddleware();
console.log('334', sagaMiddleware);
const initialState = {}

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
)

registerWithMiddleware(sagaMiddleware);
