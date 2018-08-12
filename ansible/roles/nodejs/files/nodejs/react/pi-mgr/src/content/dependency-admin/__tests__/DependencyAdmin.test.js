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
