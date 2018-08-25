import { call, takeLatest, put } from 'redux-saga/effects';

import {DA_DB_REQUEST, DA_DB_SUCCESS, DA_DB_FAILURE} from './DependencyAdminActions';




const baseUrl = 'http://localhost:6080/';

function fetchDbResponse({crudRule, values}) {
  console.log('033', crudRule, values);
  try {
    switch (crudRule) {
      case 'create':
        return fetch(baseUrl+'dependency', {
          method: 'post',
          body: JSON.stringify(values),
          mode: 'cors',
          headers: { 'Content-Type': 'application/json'}
        });
      case 'update' :
        return fetch(baseUrl+'dependency/'+values.name, {
          method: 'put',
          body: JSON.stringify(values),
          mode: 'cors',
          headers: { 'Content-Type': 'application/json'}
        });
      case 'read':
        return fetch(baseUrl+'dependency', {
          method: 'get',
          mode: 'cors',
        });
      default:
        console.log('095');
        throw (`Invalid crud rule ${crudRule}`);
    }
  } catch (err) {
    console.log ('7465',err);
  }
}

export default function* dbWorker(action) {
  console.log('097', action);
  try {
    const response = yield call(fetchDbResponse, action.payload);
    console.log('987',response); 
    const payload = yield response.json();
    console.log('986',payload, response); 
    return payload;
  } catch(e) {
    if (isUnableToReachServer(e)) {
      console.log('failed to reach database server.');
      yield put({type:DA_DB_FAILURE, payload: {reasonType: 'ServerUnreachable', detail: e}});  
    } else {
      console.log('876', e);
    }
    yield put({type:DA_DB_FAILURE, payload: {reasonType: 'Unknown', detail: e}});  
  }
}
// Observed 'TypeError: "NetworkError when attempting to fetch resource."' 
// when backend server was down.
function isUnableToReachServer(error) {
  return (error instanceof TypeError) && (error.message == 'NetworkError when attempting to fetch resource.');
}

