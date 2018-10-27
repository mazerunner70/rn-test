// @flow
import sqlite3 from 'sqlite3';
import R from 'ramda';

let dbPath: ?string = null;
const GetDb = () :Promise<sqlite3.Database> => new Promise(
  (
    resolve: (result: Promise<sqlite3.Database> | sqlite3.Database) => void,
    reject: (error: any) => void
  ): void => {
  if (dbPath) {
    throw new Error(`Already initialised Db at '${dbPath}'`);
  }
  dbPath = process.env.SQLITE_DB_PATH;
  console.log('001', dbPath);
  const db: sqlite3.Database = new sqlite3.Database(
    dbPath, 
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (error: Error) => {
      console.log('002', error);
      if (error) {
        reject(error);
      } else {
        resolve(db);
      }
    } );
});

export {GetDb};// non-memoized version

const mGetDb = R.memoizeWith(() => 'ignore params', GetDb);

export default mGetDb ;


