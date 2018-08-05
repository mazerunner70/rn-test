import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';


// Define a new component
const MyComponent = (props) => (
  <div className={ props.className }>Hello {props.name }!</div>
)
const StyledMyComponent = styled(MyComponent)`
  background-color: ${ props => props.color ? props.color : 'blue' };
  color: white;
`;

// Add a new story
storiesOf('Example Story', module)
  // Add our new component to the story
  .add('My Component', () => <StyledMyComponent name="world" color='#bada55'/>);
