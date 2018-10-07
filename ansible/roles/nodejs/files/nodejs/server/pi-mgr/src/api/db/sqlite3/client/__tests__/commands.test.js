import * as commands from '../commands';
import moment from 'moment';

async function dropTable() {
    const sql = `DROP TABLE IF EXISTS  dependency`;
  
  const result = await commands.run(sql);

}

test('table construction works on valid db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  const sql = `
  CREATE TABLE IF NOT EXISTS  dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;
  
  const result = await commands.run(sql);
  expect(result).toEqual({id:null});
});

test('invalid table construction fails on valid db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  const sql = `
  CREATE TABLE IF NOT EISTS  dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;
  try {
    const result = await commands.run(sql);
    expect(true).toEqual('should have errored');
  } catch(e) {
    expect(e.message).toEqual('SQLITE_ERROR: near "EISTS": syntax error');
  }
});

test('retrieve one row works on valid db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  const sqlCreate = `
  CREATE TABLE IF NOT EXISTS  dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;
  
  await commands.run(sqlCreate);
  const sqlInsert = `
    INSERT INTO dependency (
      name, 
      curr_ver,  
      last_check) VALUES ($name, $currVer, $lastCheck)`;
  const unixTime = moment().unix();
  await commands.run(sqlInsert, {
    $name: "name1",
    $currVer: "3",
    $lastCheck: unixTime
  });

  const sqlGetByPk = `
    SELECT * FROM dependency
      WHERE name = $name `;
  const result = await commands.getByPk(sqlGetByPk, {
    $name: "name1"
  });
  // console.log(result);
  expect(result).toEqual({'name':'name1', 'curr_ver': 3, 'last_check': unixTime});
});

test('retrieve one row fails if no rows on valid db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  await dropTable();
  const sqlCreate = `
  CREATE TABLE  dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;
  
  await commands.run(sqlCreate);
  const unixTime = moment().unix();

  const sqlGetByPk = `
    SELECT * FROM dependency
      WHERE name = $name `;
  const result = await commands.getByPk(sqlGetByPk, {
    $name: "name1"
  });
  // console.log(result);
  expect(result).toBeUndefined();
});

test('retrieve all for one row works on valid db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  await dropTable();
  const sqlCreate = `
  CREATE TABLE  dependency (
    name TEXT PRIMARY KEY, 
    curr_ver NUMERIC,  
    last_check NUMERIC )`;
  
  await commands.run(sqlCreate);
  const sqlInsert = `
    INSERT INTO dependency (
      name, 
      curr_ver,  
      last_check) VALUES ($name, $currVer, $lastCheck)`;
  const unixTime = moment().unix();
  await commands.run(sqlInsert, {
    $name: "name1",
    $currVer: "3",
    $lastCheck: unixTime
  });

  const sqlAll = `
    SELECT * FROM dependency
      WHERE curr_ver = $currVer `;
  const result = await commands.getAll(sqlAll, {
    $currVer: 3
  });
  // console.log(result);
  expect(result).toEqual([{'name':'name1', 'curr_ver': 3, 'last_check': unixTime}]);
});

