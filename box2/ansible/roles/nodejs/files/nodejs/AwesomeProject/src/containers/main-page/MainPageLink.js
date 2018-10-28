import { connect } from 'react-redux';
import MainPage from './MainPage';
import { withRouter } from 'react-router-native';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProp = (dispatch, ownProps) => {
    return {

    }
}

const MainPageLink = withRouter(connect(
    mapStateToProps,
    mapDispatchToProp,
)(MainPage))

export default MainPageLink;