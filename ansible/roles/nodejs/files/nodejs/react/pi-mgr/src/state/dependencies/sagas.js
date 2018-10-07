import { all, call, put, takeEvery, select} from 'redux-saga/effects';
import moment from 'moment';
import * as actions from './actions';
import * as types from './types';
import * as selectors from './selectors';
import db from '../api/dependencies';



// Saga to initialise dependencies
// Workflow:
//  - initDependencies saga to fire action 'loadDependencies'
//  - watchloadDependecies saga listens for this and uses loadDependencies to makes backend call, then fires newDependencies action
//  - dependencies reducer receives that and updates state

// Initialise
export function* initDependencies(action) {
  yield put(actions.loadDependencies());
}

// Watchers
export function* watchLoadDependencies(action) {
  console.log('Load Dependency listening');
  yield takeEvery(types.LOAD, loadDependencies)
}

export function* watchLoadingDependencies(action) {
  console.log('Loading Dependency listening');
  yield takeEvery(types.LOADING, loadingDependencies)
}

export function* watchLoadedDependencies(action) {
  console.log('Loaded Dependency listening');
  yield takeEvery(types.LOADED, loadedDependencies)
}

export function* watchLoadingDependenciesFail(action) {
  console.log('Loaded Dependency listening');
  yield takeEvery(types.LOADING_FAIL, loadedDependenciesFailed)
}

export function* watchSubmitDependency(action) {
  console.log('Submit Dependency listening');
  yield takeEvery(types.SUBMIT, submitDependency)
}

export function* watchDeleteDependency(action) {
  console.log('Delete Dependency listening');
  yield takeEvery(types.DELETE, deleteDependency)
}



//Sagas
function* loadDependencies(action) {
  console.log('Loading Dependencies');
  yield put (actions.loadingDependencies());
  try {
    const result = yield call(db,'read');
    console.log('383', result);
    yield put (actions.loadedDependencies(result));
  } catch(err) {
    console.log('223', err);
    yield put (actions.loadingDependenciesFail());

  }
}

function* loadingDependencies(action) {
  console.log('loading dependencies');
}

function* loadedDependencies(action) {
  console.log('loaded dependencies', action);
}

function* loadedDependenciesFailed(action) {
  console.log('loading dependencies failed', action);
}

function* submitDependency(action) {
  console.log('submit dependency', action);
  if (action.payload == []) {
    return;
  }
  const isUpdate = yield select (selectors.isRowInDependencies, action.payload);
  const date = moment(action.payload.lastCheck, 'DD-MM-YYYY').startOf('day');
  console.log('333', date);
  console.log('333', JSON.stringify(date));
  const dependency = {
    name: action.payload.name,
    currVer: action.payload.currVer,
    lastCheck: date.format('DD-MM-YYYY')
  }
  console.log('997', isUpdate)

  yield call (db, isUpdate?'update':'create', dependency);
  yield put(actions.loadDependencies());
}

function* deleteDependency(action) {
    console.log('delete dependency', action);
    if (action.payload.row) {
      const rowName = action.payload.row.name;
      yield call (db, 'delete', {name:rowName});
      yield put(actions.loadDependencies());
    }
}

