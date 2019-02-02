import {API_URL} from 'react-native-dotenv';

import auth from '../auth'

function getReportRange() {
    console.log('2214', auth.getIdToken().length, API_URL+'/reports');
    promise =  fetch(API_URL+'/reports',{
        method: 'get',
        headers: {
            Authorization: auth.getIdToken()
        }
    })
    .then(responseRaw => responseRaw.json())
    .then((response) => {
        console.log(2134, response);
        console.log(2135, response.lowest);
        return asRange(response);
    })
    .catch((err) => {
        console.error(err);
    })
    return promise;
}
const asRange = (jsonObject) => ({start: jsonObject.lowest, end: jsonObject.highest});

function getNextReportChunk(range, pageNo, pageSize) {
    console.log('2215');
    rangeString = encodeURIComponent(asString(range));
    pageNoString = encodeURIComponent(pageNo.toString());
    pageSizeString = encodeURIComponent(pageSize.toString());
    fetchUrl = API_URL+`/report?range=${rangeString}&index=${pageNoString}&pagesize=${pageSizeString}`;
    console.log('2217', fetchUrl);
    promise = fetch(fetchUrl, {
        method: 'get',
        headers: {
            Authorization: auth.getIdToken()
        }
    })
    .then(responseRaw => responseRaw.json())
    .then((response) => {
        return response;
    });
    return promise;
}

const asString = (range) => range.start.toString()+'-'+range.end.toString();

export { 
    getReportRange,
    getNextReportChunk,
}