import { connect } from 'react-redux';
import MainPage from './MainPage';
import { withRouter } from 'react-router-native';

import * as authActions from '../../state/auth/actions';
import * as AuthSelectors from '../../state/auth/selectors';
import * as AuthOperations from '../../state/auth/operations';

const mapStateToProps = (state, ownProps) => {
    console.log(12, AuthOperations.isAuthenticated(state))
    return {
        loggedInName: AuthSelectors.getUsername(state),
        isAuthenticated: AuthOperations.isAuthenticated(state),
    }
}

const mapDispatchToProp = (dispatch, ownProps) => {
    return {
        doLogin: () => dispatch(authActions.loadAuth()),
    }
}

const MainPageLink = withRouter(connect(
    mapStateToProps,
    mapDispatchToProp,
)(MainPage))

export default MainPageLink;