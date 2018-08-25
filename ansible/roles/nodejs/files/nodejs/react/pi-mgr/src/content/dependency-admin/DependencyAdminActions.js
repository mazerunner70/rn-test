
export const INIT_DEPENDENCY_ADMIN = 'initialiseDependencyAdmin';
export const RELOAD_DEPENDENCY_ADMIN = 'reloadDependencyAdmin';
export const UPDATE_STORE = 'updateStore';
export const UPDATE_DB = 'updateDb';
export const DA_DB_REQUEST = 'dependencyAdminDbRequest';
export const DA_DB_SUCCESS = 'dependencyAdminDbSuccess';
export const DA_DB_FAILURE = 'dependencyAdminDbFailure';
export const DA_DATA_SUBMITTED = 'daDataSubmitted';

// Used to initialise the data on the dpendency admin screen
export const initialiseDependencyAdmin = (dependencyList) => ({
  type: INIT_DEPENDENCY_ADMIN,
  payload: dependencyList
});
// Called either from initial page loading of data, 
// or the reload after data change
export const reloadDependencyAdmin = (dependencyList) => ({
  type: RELOAD_DEPENDENCY_ADMIN,
  payload: dependencyList
});

// export const updateStore = (values) => ({
//   type: UPDATE_STORE,
//   payload: values
// });

export const dataSubmitted = (values) => ({
  type: DA_DATA_SUBMITTED,
  payload: values
});

// export const updateDb = (values) => ({
//   type: UPDATE_DB,
//   payload:values
// })