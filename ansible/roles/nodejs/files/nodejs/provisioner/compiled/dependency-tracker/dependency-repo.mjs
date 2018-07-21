

//      
export default class DependencyRepo {
           
  constructor(dao     ) {
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
  insert(name        , currVer        , lastCheck      ) {
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
  update({ name, currVer, lastCheck }                                                  ) {
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
  delete(name        ) {
    return this.dao.run(
      `DELETE FROM dependency 
      WHERE name = ?`,
      [name],
    )
      .then(success => ({ status: 'SUCCESS', details: success }))
      .catch(failure => ({ status: 'FAILURE', details: failure }));
  }
  getByName(name        ) {
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
  static dateAsUtcString(date      ) {
    return date.toUTCString();
  }
  static utcStringAsDate(utcString        ) {
    // format must be ddd, dd mmm yyyy hh:mm:ss Z
    return new Date(utcString);
  }
}
