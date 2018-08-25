import { expectSaga } from 'redux-saga-test-plan';
import fetch from 'isomorphic-fetch';
global.fetch = fetch;

import dbWorker  from '../DependencyAdminDao.saga';


// Use this method to get a sens eof what he back end system sends,
// but rest of tests need fetch mocked out
//  harvestForTest('dbWorker - create',  async () => {
//   const valuePayload = {name:"dume", currVer:4.3, lastCheck: '2015-03-25T12:00:00Z'};
//   const dbPayload = {payload: {crudRule: 'create', values: valuePayload}};
//   console.log('012', valuePayload, dbPayload);
//   expectSaga(dbWorker, dbPayload)
//   .returns({ status: 'FAILURE',
//   details: { errno: 19, code: 'SQLITE_CONSTRAINT' } })
//   .run();
// });

function mockFetch(data) {
  return jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

test('dbWorker - create', () => {
  const payload = {
    payload: {
      crudRule: 'create', 
      values: {
        name:"dume", 
        currVer:4.3, 
        lastCheck: '2015-03-25T12:00:00Z'
      }
    }
  }
  const response = {
    status: 'FAILURE',
    details: { 
      errno: 19, 
      code: 'SQLITE_CONSTRAINT' 
    }
  }
  fetch = mockFetch(response);
  expectSaga(dbWorker, payload)
  .returns({ 
    status: 'FAILURE',
    details: { 
      errno: 19, 
      code: 'SQLITE_CONSTRAINT' 
    } 
  })
  .run();
});
