<<<<<<< HEAD
import React from 'react';
import renderer from 'react-test-renderer';

import DependencyAdmin from '../DependencyAdmin';

jest.mock('../../../components/datagrid/DataGrid', () => () => <div id='DataGrid'>DataGrid</div>)
jest.mock('../../../store');

test('Test rendering of Dependency Admin', () => {
  const component = renderer.create(
    <DependencyAdmin 
    onInitialise={ ()=> console.log('hi') }
    dependencies = { [] }/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
||||||| merged common ancestors
=======
import React from 'react';
import renderer from 'react-test-renderer';

import DependencyAdmin from '../DependencyAdmin';

test('Test rendering of Dependency Admin', () => {
  const component = renderer.create(
    <DependencyAdmin/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
>>>>>>> 0079bb0c5e4da0fbb9d6508bd3f47094fc4b0340
