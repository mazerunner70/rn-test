
export const INIT_DEPENDENCY_ADMIN = 'initialiseDependencyAdmin';
export const UPDATE_STORE = 'updateStore';

export const initialiseDependencyAdmin = (dependencyList) => ({
  type: INIT_DEPENDENCY_ADMIN,
  payload: dependencyList
});

export const updateStore = (values) => ({
  type: UPDATE_STORE,
  payload: values
});
