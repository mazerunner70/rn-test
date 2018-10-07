import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './navbar';

const menuOptions = [
  {
    name: 'About'
  },
  {
    name: 'Misc'
  }
];

storiesOf('Navbar', module)
  .add('default', () => (
    <div>
      <Navbar buttons={menuOptions}/>
    </div>
    )
  ) 