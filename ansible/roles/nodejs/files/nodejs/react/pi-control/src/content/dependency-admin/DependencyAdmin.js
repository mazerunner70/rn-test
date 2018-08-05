import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

import 'App.css';

import DataGrid from '../../components/datagrid/DataGrid';
import { initialiseDependencyAdmin } from './DependencyAdminActions';
import { store } from '../../store';



export default class DependencyAdmin extends React.Component {

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

  constructor (props) {
    super (props);
    store.dispatch(initialiseDependencyAdmin( [] ));
  }

  render() {
    console.log('==',this.columnData);
    return (
      <div className='w3-row w3-padding-64'>
        <div className='w3-container'>
          <h1 className='w3-text-teal'>Dependency Admin</h1>
          <DataGrid columnData={this.columnData} content={store.getState().dependencies || []}/>
        </div>
      </div>
    );
  }

}
          // <DataGrid columnData={this.columnData} content={store.getState().dependencies}/>
