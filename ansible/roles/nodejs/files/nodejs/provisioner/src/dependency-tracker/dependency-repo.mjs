

// @flow
export default class DependencyRepo {
  dao: any;
  constructor(dao: any) {
    this.dao = dao;
  }
  initialise() {
    const sql = `
    CREATE TABLE IF NOT EXISTS  dependency (
      name TEXT PRIMARY KEY, 
      curr_ver NUMERIC,  
      last_check NUMERIC )`;
    return this.dao.run(sql);
  }
  insert(name: string, currVer: string, lastCheck: Date) {
    console.log(`Inserting name:${name}, currVer: ${currVer}, lastCheck: ${String(lastCheck)}`);
    return this.dao.run(
      `INSERT INTO dependency (
        name, 
        curr_ver,  
        last_check) VALUES (?, ?, ?)`,
      [name, currVer, DependencyRepo.dateAsUtcString(lastCheck)],
    )
      .then(success => `status: SUCCESS, details:${success}`)
      .catch(failure => `status: FAILURE, detail: ${failure}`);
  }
  update(name: string, currVer: string, lastCheck: Date) {
    return this.dao.run(
      `UPDATE dependency SET ( 
        curr_ver,  
        last_check) = (?, ?) WHERE name = ?`,
      [name, currVer, DependencyRepo.dateAsUtcString(lastCheck)],
    );
  }
  delete(name: string) {
    return this.dao.run(
      `DELETE FROM dependency 
      WHERE name = ?`,
      [name],
    );
  }
  getByName(name: string) {
    const result = this.dao.get(
      `SELECT * FROM dependency
      WHERE name = ?`,
      [name],
    ).then((successResult) => {
      const res = {
        name: successResult.name,
        currVer: successResult.curr_ver,
        lastCheck: DependencyRepo.utcStringAsDate(successResult.last_check),
      };
      console.log(res);
      return res;
    });
    return result;
  }
  getAll() {
    const result = this.dao.all('SELECT * FROM dependency')
      .then(successResult => successResult.map((entry) => {
        const res = {
          name: entry.name,
          currVer: entry.curr_ver,
          lastCheck: DependencyRepo.utcStringAsDate(entry.last_check),
        };
        console.log('from db', res);
        return res;
      }));
    return result;
  }
  static dateAsUtcString(date: Date) {
    return date.toUTCString();
  }
  static utcStringAsDate(utcString: string) {
    // format must be ddd, dd mmm yyyy hh:mm:ss Z
    return new Date(utcString);
  }
}
