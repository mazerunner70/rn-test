import {combineReducers } from 'redux';
import * as types from './types';



const initialState = [];

const dependencyReducer = (state = initialState, action) => {
  console.log('lll', action);
  switch (action.type) {
    case types.LOADED: return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers( {
  list: dependencyReducer,
})

export default reducer;