

function getInsertFailCategory(failure: any) {
  return failure.startsWith('SQL VIOLATION') ? 'Duplicate key' : 'General';
}


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
    return this.dao.run(sql)
      .then(success => ({ status: 'SUCCESS', details: success }))
      .catch(failure => ({ status: 'FAILURE', details: failure }));
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
      .then(success => ({ status: 'SUCCESS', details: success }))
      .catch(failure => ({ status: 'FAILURE', details: failure }));
  }
  update({ name, currVer, lastCheck }: {name: string, currVer: string, lastCheck: Date}) {
  // update(name: string, currVer: string, lastCheck: Date) {
    return this.dao.run(
      `UPDATE dependency SET ( 
        curr_ver,  
        last_check) = (?, ?) WHERE name = ?`,
      [name, currVer, DependencyRepo.dateAsUtcString(lastCheck)],
    )
      .then(success => ({ status: 'SUCCESS', details: success }))
      .catch(failure => ({ status: 'FAILURE', details: failure }));
  }
  delete(name: string) {
    return this.dao.run(
      `DELETE FROM dependency 
      WHERE name = ?`,
      [name],
    )
      .then(success => ({ status: 'SUCCESS', details: success }))
      .catch(failure => ({ status: 'FAILURE', details: failure }));
  }
  getByName(name: string) {
    const result = this.dao.get(
      `SELECT * FROM dependency
      WHERE name = ?`,
      [name],
    ).then((successResult) => {
      const res = successResult && {
        name: successResult.name,
        currVer: successResult.curr_ver,
        lastCheck: DependencyRepo.utcStringAsDate(successResult.last_check),
      };
      console.log(`Getting name:${name}, res: ${JSON.stringify(res)}`);
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
