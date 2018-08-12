import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';

import DataGrid from './DataGrid';

const initialState = { 
    content: [
      {
        id: 1,
        name: 'TV',
        'price': 1000
      },
      {
        id: 2,
        name: 'Mobile',
        'price': 500
      },
      {
        id: 3,
        name: 'Book',
        'price': 20
      },
    ],
    columns: [{
      dataField: 'id',
      text: 'Product ID',
      prompt: 'Enter the id for the dependency',
    },
    {
      dataField: 'name',
      text: 'Product Name',
      prompt: 'Enter a uniquely identifying name',
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true,
      prompt: 'Enter the price for the dependency',
    }]

  }

  console.log(initialState);

storiesOf('DataGrid', module)
  .add('default', () => <DataGrid 
    columnData={ initialState} 
    content={initialState.content}
    processSubmitedValues={action('submitted')}/>)
  .add('empty', () => <DataGrid columnData={ initialState} content={[]}/>);