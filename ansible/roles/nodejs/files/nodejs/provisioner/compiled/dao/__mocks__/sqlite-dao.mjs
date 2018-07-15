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
    resolve({ mockedGet: true });
  }));
export const mockAll = jest.fn();
mockAll
  .mockReturnValue(new Promise((resolve, reject) => {
    console.log('mock of all');
    resolve({ mockedAll: true });
  }));
const mock = jest.fn().mockImplementation(() => {
  return { run: mockRun, get: mockGet, all: mockAll };
});
export default mock;
