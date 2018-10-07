import * as types from './types';

const showAboutModal = () => ( {
  type:types.SHOW_ABOUT_MODAL
})
const toggleSidebar = () => ( {
  type:types.TOGGLE_SIDEBAR
})

const hideAboutModal = () => ( {
  type:types.HIDE_ABOUT_MODAL
})

const closeSidebar = () => ( {
  type:types.HIDE_SIDEBAR
})

export {
  showAboutModal,
  toggleSidebar,
  hideAboutModal,
  closeSidebar
};