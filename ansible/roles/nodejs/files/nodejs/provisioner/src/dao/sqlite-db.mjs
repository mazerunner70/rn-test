import sqlite3 from 'sqlite3';

// @flow
function getDb(dbFilePath: string) {
  const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.log('Could not connect to database', err);
      return null;
    }
    console.log('Connected to database')
    return db;
  });
}
