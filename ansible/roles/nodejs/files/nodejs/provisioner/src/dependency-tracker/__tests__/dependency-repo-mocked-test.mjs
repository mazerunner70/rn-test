import Dao, {mockRun, mockGet, mockAll} from '../../dao/sqlite-dao.mjs';
import DependencyRepo from '../dependency-repo.mjs';

jest.mock('../../dao/sqlite-dao.mjs');

describe('confirm DAO init correctly', () => {
  test('test init', async () => {
    Dao.mockClear();
    mockRun.mockClear();
    const dao = new Dao();
    const dependencyRepo = new DependencyRepo(dao);
    expect(dependencyRepo.dao).toEqual(dao);
    const result = await dependencyRepo.initialise();
    expect (mockRun).toHaveBeenCalledTimes(1);
    expect (result).toEqual({ mocked: true });
  });
});

describe('Confirm date conversion works', () => {
  test('convert from date format', () => {
    const dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    const date = new Date(dateString);
    expect(DependencyRepo.dateAsUtcString(date)).toEqual(dateString);
  });
  test('convert to date format', () => {
    const dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    const date = new Date(dateString);
    expect(DependencyRepo.utcStringAsDate(dateString)).toEqual(date);
  });
});

describe('confirm insert works', () => {
  test('insert operation works', async () => {
    Dao.mockClear();
    mockRun.mockClear();
    const dao = new Dao();
    const dependencyRepo = new DependencyRepo(dao);
    expect(dependencyRepo.dao).toEqual(dao);
    // create table
    let result = await dependencyRepo.initialise();
    expect (mockRun).toHaveBeenCalledTimes(1);
    expect (result).toEqual({ mocked: true });
    // insert row
    const dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    const date = new Date(dateString);
    result = await dependencyRepo.insert('name', '3.2', date);
    expect (mockRun).toHaveBeenCalledTimes(2);
    expect (result).toEqual({ mocked: true });
  });
});
describe('confirm update works', () => {
  test('update operation works', async () => {
    Dao.mockClear();
    mockRun.mockClear();
    const dao = new Dao();
    const dependencyRepo = new DependencyRepo(dao);
    expect(dependencyRepo.dao).toEqual(dao);
    // create table
    let result = await dependencyRepo.initialise();
    expect (mockRun).toHaveBeenCalledTimes(1);
    expect (result).toEqual({ mocked: true });
    // insert row
    let dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    let date = new Date(dateString);
    result = await dependencyRepo.insert('name', '3.2', date);
    expect (mockRun).toHaveBeenCalledTimes(2);
    expect (result).toEqual({ mocked: true });
    // update row
    dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    date = new Date(dateString);
    result = await dependencyRepo.update('name', '33', date);
    expect (mockRun).toHaveBeenCalledTimes(3);
    expect (result).toEqual({ mocked: true });
  });
});
describe('confirm delete works', () => {
  test('delete operation works', async () => {
    Dao.mockClear();
    mockRun.mockClear();
    const dao = new Dao();
    const dependencyRepo = new DependencyRepo(dao);
    expect(dependencyRepo.dao).toEqual(dao);
    // create table
    let result = await dependencyRepo.initialise();
    expect (mockRun).toHaveBeenCalledTimes(1);
    expect (result).toEqual({ mocked: true });
    // insert row
    let dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    let date = new Date(dateString);
    result = await dependencyRepo.insert('name', '3.2', date);
    expect (mockRun).toHaveBeenCalledTimes(2);
    expect (result).toEqual({ mocked: true });
    // delete row
    result = await dependencyRepo.delete('name');
    expect (mockRun).toHaveBeenCalledTimes(3);
    expect (result).toEqual({ mocked: true });
  });
});
describe('confirm get works', () => {
  test('get operation works', async () => {
    Dao.mockClear();
    mockRun.mockClear();
    const dao = new Dao();
    const dependencyRepo = new DependencyRepo(dao);
    expect(dependencyRepo.dao).toEqual(dao);
    // create table
    let result = await dependencyRepo.initialise();
    expect (mockRun).toHaveBeenCalledTimes(1);
    expect (result).toEqual({ mocked: true });
    // insert row
    let dateString = 'Mon, 01 Jan 2018 01:20:30 GMT';
    let date = new Date(dateString);
    result = await dependencyRepo.insert('name', '3.2', date);
    expect (mockRun).toHaveBeenCalledTimes(2);
    expect (result).toEqual({ mocked: true });
    // get row
    result = await dependencyRepo.getByName('name');
    expect (mockGet).toHaveBeenCalledTimes(1);
    console.log(result);
    expect (result).toEqual({ mockedGet: true });
  });
});
