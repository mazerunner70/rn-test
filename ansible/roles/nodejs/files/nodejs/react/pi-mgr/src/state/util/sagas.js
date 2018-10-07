import { all, call, put, takeEvery, select} from 'redux-saga/effects';


// Two debug functions
// helloSaga confirms that saga is running
export function* helloSaga() {
  console.log('Saga up and running!');
}
// watchAndLog tracks all messages that reach the saga workflow
function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  })
}
