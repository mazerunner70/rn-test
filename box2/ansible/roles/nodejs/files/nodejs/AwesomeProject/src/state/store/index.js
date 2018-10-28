import { createStore, applyMiddleware } from 'redux';
import { createSagaMiddleware } from 'redux-saga';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  mainPage: (state = {}, action) => {return {}}
})

//const sagaMiddleware = createSagaMiddleware();
//console.log('334', sagaMiddleware);
const initialState = {}

export const store = createStore(
  reducer,
  initialState,
//  applyMiddleware(sagaMiddleware),
)

