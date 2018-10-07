import React from 'react';
import { MainPaneDiv, InnerPaneDiv, Header} from './styled';
import DataGrid from '../../components/datagrid';
import { DatePickerField } from '../../components/simple-form';

const columnData = {
    columns: [{
      key: 'name',
      name: 'name',
      text: 'Name',
      prompt: 'Registered name of dependency',
      sort: 'true',
      label: 'Name',
      component: "input",
    type: "text",
    placeholder:"Name",
  },
    {
      key: 'currVer',
      name: 'currVer',
      text: 'Current Version',
      prompt: 'Version last found',
      label: 'Current Bersion',
      component: "input",
    type: "text",
    placeholder:"Name",
  }, 
    {
      key: 'lastCheck',
      name: 'lastCheck',
      text: 'Last Checked',
      prompt: 'Date checked',
      label: 'Last Checked',
      placeholder:"Choose date",
    component: DatePickerField,
  }]
  }


export default class Dependencies extends React.Component {
  constructor(props) {
    super(props)
    this.props.loadDependencies();
  }
  componentWillMount() {
  }

  render() {
    console.log('656 repaint page');
    return (
        <MainPaneDiv>
          <InnerPaneDiv>
            <Header>Dependency Admin</Header>
            <div><DataGrid 
            columns={columnData.columns} 
            data={this.props.dependencyList}
            onSubmit={this.props.onSubmit}
            onDelete={this.props.onDelete}/></div>
          </InnerPaneDiv>
        </MainPaneDiv>
    )
  }
}
//            onSubmit={e=>console.log('123',e)}/></div>
