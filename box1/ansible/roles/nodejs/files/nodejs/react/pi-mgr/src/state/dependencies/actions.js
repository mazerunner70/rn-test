import * as types from './types';

const loadDependencies = () => ( {
  type: types.LOAD
})

const loadingDependencies = () => ( {
  type: types.LOADING
})

const loadingDependenciesFail = () => ( {
  type: types.LOADING_FAIL
})

const loadedDependencies = (payload) => ( {
  type: types.LOADED,
  payload: payload
})

const submitDependency = (payload) => ( {
  type: types.SUBMIT,
  payload: payload
})

const deleteDependency = (event, row) => ( {
  type: types.DELETE,
  payload: {event:event, row: row}
})


export {
  loadDependencies,
  loadingDependencies,
  loadedDependencies,
  loadingDependenciesFail,
  submitDependency,
  deleteDependency
};