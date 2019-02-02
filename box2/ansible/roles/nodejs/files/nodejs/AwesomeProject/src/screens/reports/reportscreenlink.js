import { connect } from 'react-redux';
import ReportScreen from './reportscreen';

import { withRouter } from 'react-router-native';
import { isAuthenticated } from '../../state/auth/operations';
import { getReportsCount, deriveKeyWordSummaryValues, deriveComprehendSummaryValues } from '../../state/reports/selectors';

const mapStateToProps = (state, ownProps) => {
    console.log('9923');
    return {
        isAuthenticated: isAuthenticated(state),
        reportsCount: getReportsCount(state),
        dailyKeyWordSummaries: deriveKeyWordSummaryValues(state),
        dailyComprehendSummaries: deriveComprehendSummaryValues(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const ReportScreenLink = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ReportScreen)
)

export default ReportScreenLink;