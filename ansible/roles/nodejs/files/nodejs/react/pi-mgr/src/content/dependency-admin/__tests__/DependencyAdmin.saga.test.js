import { expectSaga } from 'redux-saga-test-plan';
import { call, put, takeEvery, select} from 'redux-saga/effects';
import * as matchers from 'redux-saga-test-plan/matchers';

import {DA_DB_REQUEST, DA_DATA_SUBMITTED, RELOAD_DEPENDENCY_ADMIN} from '../DependencyAdminActions';
import { decideIfAdd, getDependencies, takeDependencyUpdate, writeDb, readDb } from '../DependencyAdmin.saga';
import  dbWorker from '../DependencyAdminDao.saga';

test('takeDependencyUpdate', () => {
  // Key workflow - takes an action-signal that the user has updated a dependency
  // then writes that change to the db, re-reads the db and sends
  // a signal to update the screen state
  const action = { 
    type: DA_DATA_SUBMITTED, 
    payload: {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}
  }
  return expectSaga(takeDependencyUpdate, action)
    .provide([
      [call (writeDb, {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}), null],
      [call (readDb), {data: {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}}],
    ])
    .put({
      type: RELOAD_DEPENDENCY_ADMIN, 
      payload: {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}
    })
    .run();
})

test('writeCreateDb', () => {
  // Used to decide what db service to use to execute the change, and makes the
  // call
  const payload = {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'};
  return expectSaga(writeDb, payload)
    .provide([
      [select(getDependencies),[{name:"dumr", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}]],
      [call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: 'create', values: payload}}), null],
    ])
    .call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: 'create', values: payload}})
    .run();
})

test('writeUpdateDb', () => {
  // Used to decide what db service to use to execute the change, and makes the
  // call
  const payload = {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'};
  return expectSaga(writeDb, payload)
    .provide([
      [select(getDependencies),[{name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}]],
      [call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: 'update', values: payload}}), null],
    ])
    .call (dbWorker, {type:DA_DB_REQUEST, payload: {crudRule: 'update', values: payload}})
    .run();
})

test('decideIfAdd gives true', () => {
  const dependencies = [{name:"dumr", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}];
  const candidate = {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'};
  expect(decideIfAdd(dependencies, candidate)).toEqual(true);
})

test('decideIfAdd gives false', () => {
  const dependencies = [{name:"dumr", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'}];
  const candidate = {name:"dumr", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'};
  expect(decideIfAdd(dependencies, candidate)).toEqual(false);
})