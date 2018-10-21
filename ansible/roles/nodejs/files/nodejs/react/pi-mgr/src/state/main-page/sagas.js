import { takeEvery, call } from 'redux-saga/effects';
import * as types from './types';
import auth from '../api/auth';

// Sagas to handle login
// Workflow:
//  - watchDoLogin saga listens for login buttonclicks and invokes doLogin method

// Watchers
export function* watchDoLogin(action) {
  console.log('login listening');
  yield takeEvery(types.DO_LOGIN, doLogin)
}

function* doLogin() {
  console.log('login');
  yield call(auth.login);
}


