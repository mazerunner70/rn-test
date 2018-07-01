

// @flow
export default class DependencyRepo {
  constructor(dao) {
    this.dao = dao;
  }
  initialise() {
    const sql = `
    CREATE TABLE dependency (
      name TEXT PRIMARY KEY, 
      curr_ver NUMERIC,  
      last_check NUMERIC )`;
    return this.dao.run(sql);
  }
  insert(name: string, currVer: string, lastCheck: Date) {
    return this.dao.run(
      `INSERT INTO dependency (
        name, 
        curr_ver,  
        last_check) VALUES (?, ?, ?)`,
      [name, currVer, DependencyRepo.dateAsUtcString(lastCheck)],
    );
  }
  update(name, currVer, lastCheck) {
    return this.dao.run(
      `UPDATE dependency SET ( 
        curr_ver,  
        last_check) = (?, ?) WHERE name = ?`,
      [name, currVer, DependencyRepo.dateAsUtcString(lastCheck)],
    );
  }
  delete(name) {
    return this.dao.run(
      `DELETE FROM dependency 
      WHERE name = ?`,
      [name],
    );
  }
  getByName(name) {
    const result = this.dao.get(
      `SELECT * FROM dependency
      WHERE name = ?`,
      [name],
    );
    return result;
    // const response = result.map()
  }
  getAll() {
    const result = this.dao.all('SELECT * FROM dependency');
    return result;
  }
  static dateAsUtcString(date) {
    return date.toUTCString();
  }
  static utcStringAsDate(utcString) {
    // format must be ddd, dd mmm yyyy hh:mm:ss Z
    return new Date(utcString);
  }
}
