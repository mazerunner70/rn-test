// @flow 
import * as commands from '../db/sqlite3/client/commands';
import R from 'ramda';
import moment from 'moment';


function db2JS(row: {}) {
  const keyMapping = {
    'name': 'name',
    'curr_ver': 'currVer' ,
    'last_check': 'lastCheck' 
  }
  const valueMapping = {
    'name': value => value,
    'curr_ver': value => value ,
    'last_check': value => moment.unix(value).startOf('day')
  } 
  const result = {};
  Object.entries(row).forEach( ([key, value]) => {
    // console.log('006', value, key, keyMapping[key]);
    result[keyMapping[key]] = valueMapping[key](value);
  })
  // console.log('006', result);
  return result;
}

function JS2Db(row: {name: string, currVer: number, lastCheck: moment}) {
  const keyMapping = {
    'name': '$name',
    'currVer': '$currVer',
    'lastCheck':'$lastCheck'
  }
  const valueMapping = {
    'name': value => value,
    'currVer': value => value,
    'lastCheck': value => value.unix()
  }
  const result = {};
  // console.log('008', typeof(row.lastCheck));
  // console.log('018', valueMapping['lastCheck'](row.lastCheck));
  Object.entries(row).forEach( ([key, value]) => {
    result[keyMapping[key]] = valueMapping[key](value);
  })
  return result;
}

const initialise = () =>  {
  const sql = `
  CREATE TABLE IF NOT EXISTS dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;  
  // console.log('003');
  return commands.run(sql);
};
const mInitialise = R.memoizeWith(R.identity,initialise);


const initialised = async (...params: Array<any>) => {
  // console.log('006', initialise);
  await mInitialise();
  return R.call(...params);

}

const insertRow = (row: {}) => initialised(unSafeInsertRow, row);

const unSafeInsertRow = async(row: {name:string, currVer: number, lastCheck: moment}) => {
  const sql = `
  INSERT INTO dependency (
    name, 
    curr_ver,  
    last_check) VALUES ($name, $currVer, $lastCheck)`;
  // console.log('001', row);
  return commands.run(sql, JS2Db(row));
}



const getRow = (name: string) => initialised(unsafeGetRow, name);

const unsafeGetRow = async (name:string) => {
  const sqlGetByPk = `
  SELECT * FROM dependency
    WHERE name = $name `;
  const row = await commands.getByPk(sqlGetByPk, {
    $name: name
  });
  // console.log('005', row);
  return db2JS(row);
}


const getAll = () => initialised(unsafeGetAll,);

const unsafeGetAll = async (n) => {
  const sqlGetAll = `
    SELECT * FROM dependency`;
  const rows = await commands.getAll(sqlGetAll);
  // console.log('005', rows);
  const result = R.map(db2JS, rows);
  // console.log('006', result);
  return result;
}

const updateRow = async (row: {}) => initialised(unsafeUpdateRow, row);

const unsafeUpdateRow = async(row: {name:string, currVer: number, lastCheck: moment}) => {
  const sql = `
    UPDATE dependency SET (
      curr_ver,
      last_check
    ) = (
      $currVer,
      $lastCheck
    ) WHERE name = $name`;
  return commands.run(sql, JS2Db(row));
}


const deleteRow = (name: string) => initialised(unsafeDeleteRow, name);

const unsafeDeleteRow = async (name:string) => {
  const sql = `
    DELETE FROM dependency
    WHERE name = $name
  `;
  return commands.run(sql, {
    $name: name
  });
}

export { insertRow, getRow, getAll, initialise, updateRow, deleteRow } ;

