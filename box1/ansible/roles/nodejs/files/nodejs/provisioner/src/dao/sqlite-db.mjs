import sqlite3 from 'sqlite3';

// @flow
const db = dbFilePath => new Promise((resolve, reject) => {
  const db = new sqlite3.Database(dbFilePath || process.env.SQLITE_DB_PATH);
  db.on('open', () => resolve(db));
  db.on('error', err => reject(err));
});
async function getDb(dbFilePath) {
  const result = await getNewDb(dbFilePath);
  console.log(`db: ${result}`);
  return result;
}


export default db;
