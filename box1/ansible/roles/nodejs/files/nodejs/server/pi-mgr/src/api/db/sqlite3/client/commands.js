// @flow
import sqlite3 from 'sqlite3';
import getDb from './getDb';

async function run(sql: string, params?: {}) : Promise<{id: ?string}> {
  const db: sqlite3.Database = await getDb();
  return new Promise(
    (
      resolve: (result: Promise<{id: ?string}> | {id: ?string}) => void,
      reject: (error: any) => void
    ): void => {
      // console.log('run');
    db.run(sql, params, function (err:Error) {
      if (err) {
        // console.log(`Error running sql ${sql}`);
        // console.log(err);
        reject(err);
      } else {
        resolve({ id: /* this.lastID ||*/ null });
        // lastID only has a useful value on successful INSERT
        // Value converted to null to distinguish from undefined
      }
    });
  });
}

//@flow
async function getByPk(sql: string, params: {} = {}) : Promise<any> {
  const db: sqlite3.Database = await getDb();
  return new Promise(
    (
      resolve: (result: Promise<any> | any) => void,
      reject: (error: any) => void
    ): void => {
      db.get(sql, params, function (err: Error, row: {}) {
        if (err) {
          reject(err);
        } else {
          // console.log(row);
          resolve(row);
        }
      })
    }
  )
}

async function getAll(sql: string, params: Array<mixed> = []) : Promise<any> {
  const db: sqlite3.Database = await getDb();
  return new Promise(
    (
      resolve: (result: Promise<Array<{}>> | Array<{}>) => void,
      reject: (error: any) => void
    ): void => {
      db.all(sql, params, function (err: Error, rows: Array<{}> ) {
        if (err) {
          reject (err);
        } else {
          resolve(rows);
        }
      });
    }
  );
}

export {run, getByPk, getAll};
