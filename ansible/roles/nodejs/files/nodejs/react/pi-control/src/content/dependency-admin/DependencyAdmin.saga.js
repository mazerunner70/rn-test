import { delay } from 'redux-saga';
import { all, put, takeEvery, take, select } from 'redux-saga/effects';
import {ADD_DATA, UPDATE_STORE, UPDATE_DB} from './DependencyAdminActions';

export function* helloSaga() 
  console.log('Hello Saga');
}

export function* addDependencyAsync(action) {
  yield put({type: UPDATE_STORE , payload: action.payload});
  yield delay(2000);
  console.log('Hello Saga2', action);
}

export function* watchIncrementAsync() {
  yield takeEvery(ADD_DATA, addDependencyAsync);
}

export const getDependencies = (state) => state.dependencies;

export function* updateDb(action) {
  while(true) {
    yield take(UPDATE_DB);
    let dependencies = yield select(getDependencies);
    const isAdd = decideIfAdd(dependencies, action.payload);

    // yield put({type:})
  }
}

function decideIfAdd() {
  return null;
}

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  })
}


export default function* rootSaga() {
  yield all ([
    helloSaga(),

    watchIncrementAsync(),
    watchAndLog()

  ])
}

