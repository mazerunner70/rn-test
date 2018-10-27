import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import  Banner  from './banner';

storiesOf('Banner', module)
  .add('default', () => (
    <div>
      <Banner/>
    </div>
    )
  ) 