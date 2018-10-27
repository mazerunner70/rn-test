import sqlite3 from 'sqlite3'; // .verbose();

import DependencyDb from '../dependency-db.mjs';

test('db init works on empty db', () => {
  const db = new sqlite3.Database(':memory:');
  const dependencyDb = new DependencyDb(db);
  expect(dependencyDb.db).toEqual(db);
  console.log(dependencyDb.db.toString());
  dependencyDb.init();
});

test('testing db initialises safely', () => {
  const db = new sqlite3.Database(':memory:');
  const dependencyDb = new DependencyDb(db);
  dependencyDb.init();
  const tables = dependencyDb.loadTableNames();
  console.log(tables);
  expect(tables.find('dependenc')).toEqual(true);
});

// class DependencyDb {
//   constructor(db) {
//     this.db = db;
//   }
//   static init() {
//     this.db.run(`CREATE TABLE IF NOT EXISTS dependency (
//       name TEXT PRIMARY KEY, 
//       curr_ver NUMERIC, 
//       last_update NUMERIC, 
//       new_ver NUMERIC, 
//       last_check NUMERIC)`);
//   }
//   static loadTableNames() {
//     this.db.all('.tables', [], (err, rows) => {
//       console.log(rows.toString());
//       return rows;
//     });
//   }
//   // static set(dependency) {
//   // }
//   static get(name) {
//     const sql = `SELECT name, curr_ver, last_update, new_ver, last_check
//       FROM dependency
//       WHERE name = ?`;
//     this.db.get(sql, [name], (err, row) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       return row;
//     });
//   }
// }
// export default function createdependencyDb() {
//   const dependencyDb = new DependencyDb();
//   return dependencyDb;
// }

