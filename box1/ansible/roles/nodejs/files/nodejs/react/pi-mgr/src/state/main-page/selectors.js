import { createSelector } from 'reselect';

const getToggleState = state => state.mainpage.isSidebarVisible
const getModalVisible = state => state.mainpage.isModalVisible

export const isSidebarVisible = createSelector(
  [getToggleState],
  (toggleState) => {
    return toggleState;
  }
)
export const isModalVisible = createSelector(
  [getModalVisible],
  (modalVisible) => {
    return modalVisible;
  }
)