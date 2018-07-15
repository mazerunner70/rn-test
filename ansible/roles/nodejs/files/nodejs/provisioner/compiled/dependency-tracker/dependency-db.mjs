
export default class DependencyDb {
  constructor(db) {
    this.db = db;
  }
  init() {
    this.db.run(`CREATE TABLE IF NOT EXISTS dependency (
      name TEXT PRIMARY KEY, 
      curr_ver NUMERIC, 
      last_update NUMERIC, 
      new_ver NUMERIC, 
      last_check NUMERIC)`, [], {
        if (err) {
          throw err;
        }
      });
  }
  static tableNameResponseRowToTableList(row) {
    console.log(` row=${row.toString()}`);
    console.log(` name=${row.name}`);
    return row.name;
  }
  loadTableNames() {
    this.db.all('SELECT name from sqlite_master WHERE type =\'table\'', [], (err, rows) => {
      // this.db.all('SELECT count(name) from sqlite_master WHERE type =\'table\'', [], (err, row) => {
        // console.log(err? "-"+err.toString(): "-");
      if (err) {
        throw err;
      }
      console.log(rows);
      const tableList = rows.map(DependencyDb.tableNameResponseRowToTableList);
      return tableList;
    });
  }
  // static set(dependency) {
  // }
  get(name) {
    const sql = `SELECT name, curr_ver, last_update, new_ver, last_check
      FROM dependency
      WHERE name = ?`;
    this.db.get(sql, [name], (err, row) => {
      if (err) {
        return console.error(err.message);
      }
      return row;
    });
  }
}
export function generateDependencyDb(db) {
  const dependencyDb = new DependencyDb(db);
  return dependencyDb;
}

