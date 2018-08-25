<<<<<<< HEAD
import { all, call, put, takeEvery, select} from 'redux-saga/effects';
import {INIT_DEPENDENCY_ADMIN, DA_DATA_SUBMITTED, DA_DB_REQUEST, reloadDependencyAdmin} from './DependencyAdminActions';
import  dbWorker from './DependencyAdminDao.saga';

// Two debug functions
// helloSaga confirms that saga is running
export function* helloSaga() {
  console.log('Hello Saga');
}
// watchAndLog tracks all messages that reach the saga workflow
function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  })
}

export function* takeDependencyUpdate(action) {
  console.log('Hello Saga2', action);
  yield call (writeDb, action.payload);
console.log('077');
  const allDependencies = yield call(readDb);
console.log('076', allDependencies);
  const depModel = allDependencies.data;
console.log('075', depModel);
  yield put (reloadDependencyAdmin(depModel));
};

export function* watchDataSubmitted() {
  console.log('078');
  yield takeEvery(DA_DATA_SUBMITTED, takeDependencyUpdate);
}

export const getDependencies = (state) => state.dependencies;

export function* writeDb(payload) {
  console.log('088');
  let dependencies = yield select(getDependencies);
  const crudRule = decideIfAdd(dependencies, payload) ? 'create':'update';
  // yield put({type:DA_DB_REQUEST, payload: {crudRule: crudRule, values: payload}});
  return yield call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: crudRule, values: payload}});
}

// true if candidate is not in dependency list
export function decideIfAdd(dependencies, candidate) {
  console.log(dependencies, candidate);
  return !dependencies.find(dependency => dependency.name === candidate.name);
}

export function* readDb() {
  return yield call (dbWorker, {payload: {crudRule: 'read'}});

}

export function* watchReloadFromDb() {
  console.log('078');
  yield takeEvery(INIT_DEPENDENCY_ADMIN, function* (action) {
    const allDependencies = yield call(readDb);
    console.log('076', allDependencies);
    const depModel = allDependencies.data;
    console.log('075', depModel);

    yield put (reloadDependencyAdmin(depModel));
  });
}

export default function* rootSaga() {
  yield all ([
    watchAndLog(),
    helloSaga(),
    watchDataSubmitted(),
    watchReloadFromDb()
  ])
}

||||||| merged common ancestors
=======
import { all, call, put, takeEvery, select} from 'redux-saga/effects';
import {INIT_DEPENDENCY_ADMIN, DA_DATA_SUBMITTED, DA_DB_REQUEST, reloadDependencyAdmin} from './DependencyAdminActions';
import  dbWorker from './DependencyAdminDao.saga';

// Two debug functions
// helloSaga confirms tat saga is running
export function* helloSaga() {
  console.log('Hello Saga');
}
// watchAndLog tracks all messages that reach the saga workflow
function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  })
}


export function* watchDataSubmitted() {
  console.log('078');
  yield takeEvery(DA_DATA_SUBMITTED, function* (action) {
    console.log('Hello Saga2', action);
    // yield put({type: UPDATE_STORE , payload: action.payload});
    // yield delay(2000);
    yield call (writeDb, action.payload);
  console.log('077');
    const allDependencies = yield call(readDb);
  console.log('076', allDependencies);
    const depModel = allDependencies.data;
  console.log('075', depModel);

    yield put (reloadDependencyAdmin(depModel));
  });
}

export const getDependencies = (state) => state.dependencies;

export function* writeDb(payload) {
  console.log('088');
  let dependencies = yield select(getDependencies);
  const crudRule = decideIfAdd(dependencies, payload) ? 'create':'update';
  // yield put({type:DA_DB_REQUEST, payload: {crudRule: crudRule, values: payload}});
  yield call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: crudRule, values: payload}});
}

// true if candidate is not in dependency list
function decideIfAdd(dependencies, candidate) {
  console.log(dependencies, candidate);
  return !dependencies.find(dependency => dependency.name === candidate.name);
}

function* readDb() {
  return yield call (dbWorker, {payload: {crudRule: 'read'}});

}

export function* watchReloadFromDb() {
  console.log('078');
  yield takeEvery(INIT_DEPENDENCY_ADMIN, function* (action) {
    const allDependencies = yield call(readDb);
    console.log('076', allDependencies);
    const depModel = allDependencies.data;
    console.log('075', depModel);

    yield put (reloadDependencyAdmin(depModel));
  });
}



export default function* rootSaga() {
  yield all ([
    watchAndLog(),
    helloSaga(),
    watchDataSubmitted(),
    watchReloadFromDb()
  ])
}

>>>>>>> 0079bb0c5e4da0fbb9d6508bd3f47094fc4b0340
