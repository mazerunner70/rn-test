import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions.js';

import * as authActions from '../auth/actions';
import * as authTypes from '../auth/types';

import { getReportRange, getNextReportChunk } from '../api/reports';

export function* watchAuthSuccess() {
    try{
        console.log('237');
        yield takeEvery(authTypes.STORE_AUTH_DETAILS, loadRange);
    } catch(err){console.log(1212, err)}
}

function* loadRange() {
    try{
        console.log('239');
        yield call(delay, 1000);
        const range = yield call(getReportRange);
        yield put (actions.loadRange(range));
        console.log('7734', range, getNextReportChunk);
        let chunk = yield call(getNextReportChunk, range, 0,5000);
        console.log('7766', chunk);
        yield put (actions.updateReports({index: 0, pagesize:5000, reportList: chunk}));
    } catch(err){console.log(1213, err)}
} 

