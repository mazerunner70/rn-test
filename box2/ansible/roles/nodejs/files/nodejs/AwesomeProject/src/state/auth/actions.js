import * as types from './types';

const loadAuth = () => ({
    type: types.LOAD_AUTH
})
const storeAuthDetails = (authObject) => ({
    type: types.STORE_AUTH_DETAILS,
    payload: authObject
})
export {
    loadAuth,
    storeAuthDetails,
}