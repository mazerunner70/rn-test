import sqlite3 from 'sqlite3';
import Dao from '../../dao/sqlite-dao.mjs';
import DependencyRepo from '../dependency-repo.mjs';

//      
describe('test add one row', () => {
  test('add one row', async () => {
    const db = new sqlite3.Database(':memory:');
    const dao = new Dao(db);
    const dependencyRepo = new DependencyRepo(dao);
    try {
      await dependencyRepo.initialise();
    } catch (e) {
      console.log(e);
      expect(true).toEqual(false);
    }
    try {
      const response = await dependencyRepo.insert('dummy', '2.4', new Date('Mon, 01 Jan 2018 01:20:30 GMT'));
      console.log('insert', response);
    } catch (e) {
      console.log(e);
      expect(true).toEqual(false);
    }
    try {
      const result2 = await dependencyRepo.getByName('dummy');
      console.log(result2.toJSON);
    } catch (e) {
      console.log(e);
      expect(true).toEqual(false);
    }
    const result3 = await dependencyRepo.getAll();
    console.log(result3);
  });
});
describe('Test mulitple init of database', () => {
  test('do two inits', async () => {
    const db = new sqlite3.Database(':memory:');
    const dao = new Dao(db);
    const dependencyRepo = new DependencyRepo(dao);
    try {
      await dependencyRepo.initialise();
    } catch (e) {
      console.log(e);
      expect(true).toEqual(false);
    }
    try {
      await dependencyRepo.initialise();
    } catch (e) {
      console.log(e);
      expect(true).toEqual(false);
    }
  });
});
