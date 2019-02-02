import { combineReducers } from 'redux';
import * as types from './types';
import * as operations from './operations';

const initialRangeState = {
    range: {start: -1, end: -1},
}

const rangeReducer = (state = initialRangeState, action) => {
    switch (action.type) {
        case types.LOAD_RANGE:
            return {
                range: action.payload.range,
            }
        default:
            return state;
    }
}


const initialDetailsState = {
    index: -1,
    pagesize: -1,
    reportMap: new Map(),
    dailyKeyWordSummary: new Map(),
}


const reportsReducer = (state = initialDetailsState, action) => {
    console.log('0021');
    switch (action.type) {
        case types.UPDATE_REPORTS:
        newReportMap = operations.mergeChunkToReports(state.reportMap, action.payload.reportList);
        return {
                index: action.payload.index,
                pagesize: action.payload.pagesize,
                reportMap: newReportMap,
                dailyKeyWordSummary: operations.summaryByDay(newReportMap),
            }
        default:
            return state;
    }
}

const reducer = combineReducers( {
    range: rangeReducer,
    details: reportsReducer,
})

export default reducer;
