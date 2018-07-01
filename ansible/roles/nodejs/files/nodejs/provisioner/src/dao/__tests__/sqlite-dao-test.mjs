import sqlite3 from 'sqlite3';

import SqliteDao from '../sqlite-dao.mjs';

test('db construction works on empty db', () => {
  const db = new sqlite3.Database(':memory:');
  const sqliteDao = new SqliteDao(db);
  expect(sqliteDao.db).toEqual(db);
  console.log(sqliteDao.db.toString());
});

test('Adding table through promise', async () => {
  expect.assertions(2);
  const db = new sqlite3.Database(':memory:');
  const sqliteDao = new SqliteDao(db);
  const sql = `
    CREATE TABLE dummy (
    dummy1 TEXT )`;
  const promisedCall = sqliteDao.run(sql);
  // promisedCall.then((result) => { console.log(result); });
  const result = await promisedCall;
  console.log(`-- ${result.toString()}`);
  console.log(`--- ${result.id}`);
  expect (result.id).toBeNull();
  try {
    await sqliteDao.run(sql);
  } catch (e) {
    console.log(`-${e}-`);
    expect(e.toString()).toMatch('dummy already exists');
    console.log(`-${e}-`);
  }
});

describe('test insert and get a row', () => {
  test('get a row when none exist', async () => {
    const db = new sqlite3.Database(':memory:');
    const sqliteDao = new SqliteDao(db);
    const createTableSql = `
      CREATE TABLE dummy (
      dummy1 INTEGER )`;
    const getSql = 'SELECT * FROM dummy WHERE dummy1 = ?';
    await sqliteDao.run(createTableSql)
      .then(result => sqliteDao.get(getSql, [1]))
      .then((result2) => {
        console.log(result2);
        expect (result2).toBeNull();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  test('retrieve row when exactly one is present', async () => {
    expect.assertions(1);
    const db = new sqlite3.Database(':memory:');
    const sqliteDao = new SqliteDao(db);
    const createTableSql = `
      CREATE TABLE dummy (
      dummy1 INTEGER )`;
    const insertRow = 'INSERT INTO dummy (dummy1) VALUES (?)';
    const getSql = 'SELECT * FROM dummy WHERE dummy1 = ?';
    await sqliteDao.run(createTableSql)
      .then(result => sqliteDao.run(insertRow, [7645]))
      .then(result2 => sqliteDao.get(getSql, [7645]))
      .then((result3) => {
        console.log(`as -${JSON.stringify(result3, null, 4)}`);
        expect(result3).toEqual({ dummy1: 7645 });
      });
  });
  describe('test all function', () => {
    test('get 2 rows out of three', async () => {
      expect.assertions(1);
      const db = new sqlite3.Database(':memory:');
      const sqliteDao = new SqliteDao(db);
      const createTableSql = `
      CREATE TABLE dummy (
      dummy1 INTEGER )`;
      const insertRow = 'INSERT INTO dummy (dummy1) VALUES (?)';
      const getSql = 'SELECT * FROM dummy WHERE dummy1 < ?';
      await sqliteDao.run(createTableSql)
        .then(result => sqliteDao.run(insertRow, [1]))
        .then(result => sqliteDao.run(insertRow, [8]))
        .then(result => sqliteDao.run(insertRow, [27]))
        .then(result2 => sqliteDao.all(getSql, [20]))
        .then((result3) => {
          console.log(`as -${JSON.stringify(result3, null, 4)}`);
          expect(result3).toEqual([{ dummy1: 1 }, { dummy1: 8 }]);
        });
    });
  });
  describe('Useful samples of CRUD operations on SQLITE', () => {
    test('Update function', async () => {
      const db = new sqlite3.Database(':memory:');
      const sqliteDao = new SqliteDao(db);
      const createTableSql = `
      CREATE TABLE dummy (
      index1 INTEGER,
      data TEXT )`;
      const insertRow = 'INSERT INTO dummy (index1, data) VALUES (?, ?)';
      const updateRow = 'UPDATE dummy SET data = ? WHERE index1 = ?';
      const getSql = 'SELECT * FROM dummy WHERE index1 = ?';
      await sqliteDao.run(createTableSql)
      .then(result => sqliteDao.run(insertRow, [7645, 'tree']))
      .then(result => sqliteDao.run(updateRow, ['elm', 7645]))
      .then(result2 => sqliteDao.get(getSql, [7645]))
      .then((result3) => {
        console.log(`as -${JSON.stringify(result3, null, 4)}`);
        expect(result3).toEqual({ index1: 7645, data: 'elm' });
      });
    });
    test('Delete function', async () => {
      const db = new sqlite3.Database(':memory:');
      const sqliteDao = new SqliteDao(db);
      const createTableSql = `
      CREATE TABLE dummy (
      dummy1 INTEGER )`;
      const insertRow = 'INSERT INTO dummy (dummy1) VALUES (?)';
      const deleteRow = 'DELETE FROM dummy WHERE dummy1 = ?';
      const getSql = 'SELECT * FROM dummy WHERE dummy1 < ?';
      await sqliteDao.run(createTableSql)
        .then(result => sqliteDao.run(insertRow, [1]))
        .then(result => sqliteDao.run(insertRow, [8]))
        .then(result => sqliteDao.run(insertRow, [27]))
        .then(result => sqliteDao.run(deleteRow, [8]))
        .then(result2 => sqliteDao.all(getSql, [20]))
        .then((result3) => {
          console.log(`as -${JSON.stringify(result3, null, 4)}`);
          expect(result3).toEqual([{ dummy1: 1 }]);
        });
    });
  });
});
