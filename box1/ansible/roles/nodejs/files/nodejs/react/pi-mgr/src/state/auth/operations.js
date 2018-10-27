import auth from '../api/auth';

export function isAuthenticated(state) {
  return auth.isAuthenticated();
}

