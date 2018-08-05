
export const INIT_DEPENDENCY_ADMIN = 'initialiseDependencyAdmin';


export const initialiseDependencyAdmin = (dependencyList) => ({
  type: INIT_DEPENDENCY_ADMIN,
  payload: dependencyList
});
