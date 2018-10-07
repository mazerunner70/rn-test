import moment from 'moment';

const baseUrl = process.env.REACT_APP_BASE_URL;
console.log('Target URL: ', baseUrl);

function Rest2JS(row: {}) {
  const valueMapping = {
    'name': value => value,
    'currVer': value => value ,
    'lastCheck': value => moment(value, 'DD-MM-YYYY').startOf('day')
  } 
  const result = {};
  Object.entries(row).forEach( ([key, value]) => {
    console.log('006', value, key, valueMapping[key]);
    result[key] = valueMapping[key](value);
  })

  // console.log('006', result);
  return result;
}



const getAllResponse = async (responseP) => {
  console.log('335', responseP);
  const response = await responseP;
  const data = await response.json();
  console.log('992', data);
  return data.data.map(row => Rest2JS(row));
}

function fetchDbResponse(crudRule, values) {
  console.log('033', crudRule, values);
  switch (crudRule) {
    case 'create':
      return fetch(baseUrl+'dependency', {
        method: 'post',
        body: JSON.stringify(values),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'}
      });
    case 'update' :
      return fetch(baseUrl+'dependency/'+values.name, {
        method: 'put',
        body: JSON.stringify(values),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'}
      });
    case 'read':
      console.log('123 Reading', baseUrl+'dependency');
      return getAllResponse(fetch(baseUrl+'dependency', {
        method: 'get',
        mode: 'cors',
      }));
    case 'delete' :
      return fetch(baseUrl+'dependency/'+values.name, {
        method: 'delete',
        body: JSON.stringify(values),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'}
      });
    default:
      console.log('095');
      throw (`Invalid crud rule ${crudRule}`);
  }
}

export default fetchDbResponse;
