import { takeEvery, call, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import auth from '../api/auth';


export function* watchLoadAuth(action) {
    console.log('loadAuth listening');
    yield takeEvery(types.LOAD_AUTH, loadAuth);
}

function* loadAuth() {
    console.log('Load Auth data');
    try {
    yield call(auth.handleAuthentication);
    yield put(actions.storeAuthDetails(auth));
    } catch (err) {console.log('230', err)}
}

 