import { connect } from 'react-redux';
import MainPage from './main-page';
import * as actions from '../../state/main-page/actions';
import { isSidebarVisible, isModalVisible } from '../../state/main-page/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  console.log('722', state, isModalVisible(state));
  return {
    isSidebarVisible: isSidebarVisible(state),
    isModalVisible: isModalVisible(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showAboutModal: () => dispatch(actions.showAboutModal()),
    hideAboutModal: () => dispatch(actions.hideAboutModal()),
    toggleSidebar: () => dispatch(actions.toggleSidebar()),
    closeSidebar: () => dispatch(actions.closeSidebar())
  }
}

const MainPagelink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage));

export default MainPagelink;