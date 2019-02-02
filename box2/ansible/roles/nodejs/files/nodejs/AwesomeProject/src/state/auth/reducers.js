import { combineReducers } from 'redux';
import * as types from './types.js';

const initialState = {
    username: null,
    idToken: null,
    isAuthenticated: false,
};

const authStateReducer = (state = initialState, action) => {
    console.log('112');
    switch (action.type) {
        case types.STORE_AUTH_DETAILS: 
            return {
                username: action.payload.username,
                idToken: action.payload.getIdToken(),
                isAuthenticated: action.payload.username !== null,
            }
        default:
            return state;
    }
}

const reducer = combineReducers( {
    details: authStateReducer,
})
console.log('2362');
export default reducer;


