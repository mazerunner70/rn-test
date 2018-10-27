import { connect } from 'react-redux';
import MainPage from './main-page';
import * as actions from '../../state/main-page/actions';
import { isSidebarVisible, isModalVisible } from '../../state/main-page/selectors';
import { withRouter } from 'react-router-dom';
import * as AuthOperations from '../../state/auth/operations';
import * as AuthSelectors from '../../state/auth/selectors';



const mapStateToProps = (state, ownProps) => {
  console.log('722', state, AuthSelectors.getNickName(state));
  return {
    isSidebarVisible: isSidebarVisible(state),
    isModalVisible: isModalVisible(state),
    isAuthenticated: AuthOperations.isAuthenticated(),
    loggedInName: AuthSelectors.getNickName(state),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showAboutModal: () => dispatch(actions.showAboutModal()),
    hideAboutModal: () => dispatch(actions.hideAboutModal()),
    toggleSidebar: () => dispatch(actions.toggleSidebar()),
    closeSidebar: () => dispatch(actions.closeSidebar()),
    doLogin: () => dispatch(actions.doLogin()),
  }
}

const MainPagelink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage));

export default MainPagelink;