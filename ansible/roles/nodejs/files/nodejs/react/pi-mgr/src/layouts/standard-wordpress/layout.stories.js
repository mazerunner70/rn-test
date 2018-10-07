import Layout from './Layout';
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';


storiesOf('Layout', module)
  .add('default', () => (
    <div>
      <Layout/> 
    </div>
    )
  ) 