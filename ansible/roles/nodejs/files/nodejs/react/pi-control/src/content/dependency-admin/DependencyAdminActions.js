
export const INIT_DEPENDENCY_ADMIN = 'initialiseDependencyAdmin';
export const UPDATE_STORE = 'updateStore';
export const UPDATE_DB = 'updateDb';
export const DA_DB_REQUEST = 'dependencyAdminDbRequest';
export const DA_DB_SUCCESS = 'dependencyAdminDbRequest';
export const DA_DB_FAILURE = 'dependencyAdminDbRequest';
export const ADD_DATA = 'ADD_DATA';

export const initialiseDependencyAdmin = (dependencyList) => ({
  type: INIT_DEPENDENCY_ADMIN,
  payload: dependencyList
});

export const updateStore = (values) => ({
  type: UPDATE_STORE,
  payload: values
});

export const addData = (values) => ({
  type: ADD_DATA,
  payload: values
});

export const updateDb = (values) => ({
  type: UPDATE_DB,
  payload:values
})