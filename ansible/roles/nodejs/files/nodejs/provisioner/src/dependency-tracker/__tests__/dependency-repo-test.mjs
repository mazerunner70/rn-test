import sqlite3 from 'sqlite3';
import Dao from '../../dao/sqlite-dao.mjs';
import DependencyRepo from '../dependency-repo.mjs';
 

describe('test add one row', () => {
  test('add one row', () => {
    const db = new sqlite3.Database(':memory:');
    const dao = new Dao(db);
    const dependencyRepo = new DependencyRepo(dao);
    // dependencyRepo.ini
  });
});
