import getDb, { GetDb } from '../getDb';



test('db construction works on in memory db', async () =>  {
  process.env.SQLITE_DB_PATH = ':memory:';
  const db = await getDb();
  expect(db).not.toBeNull();
  // console.log(db);
});

test('db construction works on valid file', async () =>  {
  process.env.SQLITE_DB_PATH = './database/test.db';
  const db = await getDb();
  expect(db).not.toBeNull();
  // console.log(db);
});

test('db construction fails for two calls', async () =>  {
  try {
    process.env.SQLITE_DB_PATH = ':memory:';
    await GetDb();
    await GetDb();
    expect(true).toEqual(false);
  } catch(e) {
    // console.log('004', e.message);
    expect(e.message).toEqual("Already initialised Db at ':memory:'");
  }
});

test('db construction succeeds for two calls if memoized', async () =>  {
  try {
    process.env.SQLITE_DB_PATH = ':memory:';
    await getDb();
    await getDb();
  } catch(e) {
    // console.log('004', e.message);
      expect(true).toEqual('Memoization seems not to work');
  }
});