// based on http://stackabuse.com/a-sqlite-tutorial-with-node-js/

//      
export default class SqliteDao {
          
                 
  constructor(db     ) {
    this.db = db;
    if (db == null) {
      throw new Error('Cannot attach to db');
    }
  }
  run(sql        , params               = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (err) => {
        if (err) {
          console.log(`Error running sql ${sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve({ id: this.lastID || null });
          // lastID only has a useful value on successful INSERT
          // Value converted to null to distinguish from undefined
        }
      });
    });
  }
  get(sql        , params               = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log(`Error running sql: ${sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve(result || null);
        }
      });
    });
  }
  all(sql        , params               = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, result) => {
        if (err) {
          console.log(`Error running sql: ${sql}`);
          console.log(err);
          reject(err);
        } else {
          resolve(result || null);
        }
      });
    });
  }
}

// @flow
const getNewDb = dbFilePath => new Promise((resolve, reject) => {
  const db = new sqlite3.Database(dbFilePath || process.env.SQLITE_DB_PATH);
  db.on('open', () => resolve(db));
  db.on('error', err => reject(err));
});
export async function getDb(dbFilePath) {
  const result = await getNewDb(dbFilePath);
  console.log(`db: ${result}`);
  return result;
}
