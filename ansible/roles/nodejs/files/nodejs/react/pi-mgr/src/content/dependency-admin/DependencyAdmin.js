import React from 'react';
import styled from 'styled-components';

import DataGrid from '../../components/datagrid/DataGrid';
import { initialiseDependencyAdmin, dataSubmitted } from './DependencyAdminActions';
import { store } from '../../store';

const MainPaneDiv = styled.div `
  padding-top:64px!important;
  padding-bottom:64px!important
  &:before &:after {
    content:"";
    display:table;
    clear:both;
  }
`;

const InnerPaneDiv = styled.div `
  padding:0.01em 16px
  &:before &:after {
    content:"";
    display:table;
    clear:both;
`;

const Header = styled.h1 `
    color:#009688!important
`;


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
      prompt: 'Registered name of dependency',
      sort: true,
    },
    {
      dataField: 'currVer',
      text: 'Current Version',
      prompt: 'Version last found'
    }, {
      dataField: 'lastCheck',
      text: 'Last Checked',
      prompt: 'Date checked'
    }]
  }

// [{ name: 'dummy',
//   currVer: 2.4,
//   lastCheck: 2018-01-01T01:20:30.000Z }]

  submitValues(values) {
    console.log('030','got here');
    console.log(values);
    store.dispatch(dataSubmitted(values));
  }


  render() {
    console.log('==',this.columnData);
    console.log(store.getState());
    return (
      <MainPaneDiv>
        <InnerPaneDiv>
          <Header>Dependency Admin</Header>
          <DataGrid 
            columnData={this.columnData} 
            content={store.getState().dependencies || []}
            processSubmitedValues={this.submitValues} />
        </InnerPaneDiv>
      </MainPaneDiv>
    );
  }

}
          // <DataGrid columnData={this.columnData} content={store.getState().dependencies}/>
