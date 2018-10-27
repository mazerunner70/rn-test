import * as db from '../getSqlite3Db';
import moment from 'moment';
import * as commands from '../../db/sqlite3/client/commands';


async function dropTable() {
  const sql = `DROP TABLE IF EXISTS  dependency`;  
  const result = await commands.run(sql);
}

test('confirm schema initialises correctly', async () => {
  await dropTable();
  await db.insertRow({name:'name', currVer: 3, lastCheck: moment()})
  await db.insertRow({name:'name1', currVer: 4, lastCheck: moment()})
})

test('confirm retrieval of inserted', async () => {
  await dropTable();
  await db.initialise();
  const unixTime = moment.unix(1537639570);
  await db.insertRow({name:'name', currVer: 3, lastCheck: unixTime});
  const row = await db.getRow('name');
  expect(row).toEqual({name:'name', currVer: 3, lastCheck: unixTime});
})

test('confirm retrieval of multiple rows', async () => {
  await dropTable();
  await db.initialise();
  const unixTime = moment.unix(1537639570);
  await db.insertRow({name:'name', currVer: 3, lastCheck: unixTime});
  await db.insertRow({name:'name2', currVer: 3, lastCheck: unixTime});
  await db.insertRow({name:'name3', currVer: 3, lastCheck: unixTime});
  const rows = await db.getAll();
  expect(rows).toEqual([
    {name:'name', currVer: 3, lastCheck: unixTime},
    {name:'name2', currVer: 3, lastCheck: unixTime},
    {name:'name3', currVer: 3, lastCheck: unixTime}]);
})

test('update of a row', async () => {
  try {
    await dropTable();
    await db.initialise();
    const unixTime = moment.unix(1537639570);
    const nextDay = moment.unix(1537639571);
    console.log('011');
    await db.insertRow({name:'name', currVer: 3, lastCheck: unixTime});
    console.log('012');
    await db.insertRow({name:'name2', currVer: 3, lastCheck: unixTime});
    console.log('013');
    const result = await db.updateRow({name:'name', currVer: 5, lastCheck: nextDay});
    console.log('014');
    const rows = await db.getAll();
    expect(rows).toEqual([
      {name:'name', currVer: 5, lastCheck: nextDay},
      {name:'name2', currVer: 3, lastCheck: unixTime},
    ]);
  } catch (err) {
    console.log('016', err);
    expect(true).toEqual('exception thrown');
  }
})

test('delete of a row', async () => {
  await dropTable();
  await db.initialise();
  const unixTime = moment.unix(1537639570);
  await db.insertRow({name:'name', currVer: 3, lastCheck: unixTime});
  await db.insertRow({name:'name3', currVer: 3, lastCheck: unixTime});
  const result = await db.deleteRow('name');
  const rows = await db.getAll();
  expect(rows).toEqual([
    {name:'name3', currVer: 3, lastCheck: unixTime}
  ]);
})
