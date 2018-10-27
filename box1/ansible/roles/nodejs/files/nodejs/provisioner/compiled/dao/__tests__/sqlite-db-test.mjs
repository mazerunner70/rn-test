import getSqliteDb from '../sqlite-db.mjs';

test('db construction works on valid file', async () => {
  const db = await getSqliteDb(':memory:');
  expect(db).not.toBeNull();
  console.log(db);
});
test('db fails on invalid db path', async () => {
  try {
    await getSqliteDb('invalid/directory/../r');
  } catch (err) {
    expect(err.errno).toEqual(14);
    expect(err.code).toEqual('SQLITE_CANTOPEN');
  }
});
