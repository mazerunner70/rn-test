import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import Table from '../Table';


// Two columns, two rows

const header = [
  {
    name: 'Column1'
  },
  {
    name: 'Column2'
  }
]

const body = [
  [
    { text: 'cell1'}, {text: 'cell2'}
  ],
  [
    { text: 'cell3'}, {text: 'cell4'}
  ]
]

storiesOf('Table', module)
  .add('default', () => <Table 
    header={ header} 
    body={body}/>)
