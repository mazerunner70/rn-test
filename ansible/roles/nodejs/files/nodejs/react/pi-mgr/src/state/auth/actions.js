import * as types from './types';

const loadAuth = () => ( {
  type:types.LOAD_AUTH
})

const getProfile = (profile) => ( {
  type:types.GET_PROFILE,
  payload: profile
})


export {
  loadAuth,
  getProfile,
};