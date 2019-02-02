import * as types from './types.js';

const loadRange = (range) => ({
    type: types.LOAD_RANGE,
    payload: range,
})

const updateReports = (details) => ({
    type: types.UPDATE_REPORTS,
    payload: details,
})


export { loadRange, updateReports }