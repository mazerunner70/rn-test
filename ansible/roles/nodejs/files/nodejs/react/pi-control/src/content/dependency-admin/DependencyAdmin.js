import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

import 'App.css';

import DataGrid from '../../components/datagrid/DataGrid';
import { initialiseDependencyAdmin, updateStore } from './DependencyAdminActions';
import { store } from '../../store';



export default class DependencyAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.submitValues = this.submitValues.bind(this);
    store.dispatch(initialiseDependencyAdmin( [] ));
  }

  columnData = {
    columns: [{
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'currVer',
      text: 'Current Version',
    }, {
      dataField: 'lastCheck',
      text: 'Last Checked',
      sort: true,
    }]
  }
// [{ name: 'dummy',
//   currVer: 2.4,
//   lastCheck: 2018-01-01T01:20:30.000Z }]

  submitValues(values) {
    console.log('030','got here');
    console.log(values);
    store.dispatch(updateStore(values));
  }


  render() {
    console.log('==',this.columnData);
    console.log(store.getState());
    return (
      <div className='w3-row w3-padding-64'>
        <div className='w3-container'>
          <h1 className='w3-text-teal'>Dependency Admin</h1>
          <DataGrid 
            columnData={this.columnData} 
            content={store.getState().dependencies || []}
            processSubmitedValues={this.submitValues} />
        </div>
      </div>
    );
  }

}
          // <DataGrid columnData={this.columnData} content={store.getState().dependencies}/>
