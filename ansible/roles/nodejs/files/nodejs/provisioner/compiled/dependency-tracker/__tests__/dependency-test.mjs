import Dependency from '../dependency.mjs';

test('We can check if the Dependency object works ok', () => {
  const name = 'name';
  const currVer = 2;
  const lastUpdate = new Date('2015-03-25T12:00:00Z');
  const newVer = 5;
  const lastCheck = new Date('2015-03-15T12:00:00Z');
  const dependency = new Dependency(name, currVer, lastUpdate, newVer, lastCheck);
  expect(dependency.name).toEqual(name);
  expect(dependency.currVer).toEqual(currVer);
  expect(dependency.lastUpdate).toEqual(lastUpdate);
  expect(dependency.newVer).toEqual(newVer);
  expect(dependency.lastCheck).toEqual(lastCheck);
});

