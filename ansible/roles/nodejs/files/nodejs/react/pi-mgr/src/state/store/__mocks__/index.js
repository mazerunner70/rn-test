// __mocks__/sqlite-dao.mjs

// mock run method
export const mockDispatch = jest.fn();
mockDispatch
  .mockReturnValue(true);

export const mockGetState = jest.fn();
mockGetState
  .mockReturnValue([{ name: 'dummy', curr_ver: 2.4, 
  last_check: 'Mon, 01 Jan 2018 01:20:30 GMT' }]);

const mock = jest.fn().mockImplementation(() => ({ dispatch: mockDispatch , getState: mockGetState }));
export default mock;
