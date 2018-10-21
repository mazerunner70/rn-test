import {combineReducers } from 'redux';
import * as types from './types';



const initialState = [];

const profileReducer = (state = initialState, action) => {
  console.log('pr', action);
  switch (action.type) {
    case types.GET_PROFILE: return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers( {
  profile: profileReducer,
})

export default reducer;