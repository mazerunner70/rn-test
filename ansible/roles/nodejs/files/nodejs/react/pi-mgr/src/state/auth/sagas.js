import { takeEvery, call, put } from 'redux-saga/effects';
import * as types from './types';
import auth from '../api/auth';
import * as actions from './actions';

// Sagas to handle completed login
// Workflow:
//  - watchLoadAuth saga listens for signal to process response from login attempt

// Watchers
export function* watchLoadAuth(action) {
  console.log('loadAuth listening');
  yield takeEvery(types.LOAD_AUTH, loadAuth)
}

function* loadAuth() {
  console.log('load Auth data');
  yield call(auth.handleAuthentication);
  console.log('396');
  const profile = yield call(auth.getProfile);
  yield put(actions.getProfile(profile), );

}

