import * as types from './types';
import {combineReducers } from 'redux';

/* State Shape

mainpage: {
  isModalVisible: false,    --- indicates when the about popup should be visible. Controlled
                                from MainPage, implemented in component About
  isSidebarVisible: false  --- indicates when user has selected the sidebar menu to be visible
}
*/

const aboutModalReducer = (state = false, action ) => {
  console.log('421', state, action);
  switch(action.type) {
    case types.SHOW_ABOUT_MODAL: return true;
    case types.HIDE_ABOUT_MODAL: return false;
    default: return state;
  }
}

const sidebarReducer = (state = false, action) => {
  console.log('424', state, action);
  switch (action.type) {
    case types.TOGGLE_SIDEBAR: return !state;
    case types.HIDE_SIDEBAR: return false;
    default: return state;
  }
}

const reducer = combineReducers( {
  isModalVisible: aboutModalReducer,
  isSidebarVisible: sidebarReducer
})

export default reducer;