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
