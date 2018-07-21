// __mocks__/sqlite-dao.mjs

// mock run method
export const mockRun = jest.fn();
mockRun
  .mockReturnValue(new Promise((resolve, reject) => {
    console.log('mock of run');
    resolve({ mocked: true });
  }));
export const mockGet = jest.fn();
mockGet
  .mockReturnValue(new Promise((resolve, reject) => {
    console.log('mock of get');
    resolve({ name: 'dummy', curr_ver: 2.4, last_check: 'Mon, 01 Jan 2018 01:20:30 GMT' });
  }));
export const mockAll = jest.fn();
mockAll
  .mockReturnValue(new Promise((resolve, reject) => {
    console.log('mock of all');
    resolve([{ name: 'dummy', curr_ver: 2.4, last_check: 'Mon, 01 Jan 2018 01:20:30 GMT' }]);
  }));
const mock = jest.fn().mockImplementation(() => ({ run: mockRun, get: mockGet, all: mockAll }));
export default mock;
