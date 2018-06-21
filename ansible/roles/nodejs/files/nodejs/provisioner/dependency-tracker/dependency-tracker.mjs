import sqlite3 from 'sqlite3';
export default class DependencyTracker {
  constructor() {
    this.db = new sqlite3.Database('./db/provisioner.db');
  }

  static sayHello(asd) {
    const text = `Hello ${asd}`;
    console.log(text);
    return text;
  }

  respond() {
    console.log(this);
    const response = [
      {
        name: 'Rasbian', curr_ver: 2, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
      {
        name: 'Rasbian', curr_ver: 1, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
    ];
    return JSON.stringify(response);
  }

  get() {
    console.log(this);
    const response = [
      {
        name: 'erfgre', curr_ver: 2, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
      {
        name: 'Rasbian', curr_ver: 1, last_update: '010-02-18T17:59:41', new_ver: 60, last_check: '010-02-18T17:59:41',
      },
    ];
    return JSON.stringify(response);
  }
}
