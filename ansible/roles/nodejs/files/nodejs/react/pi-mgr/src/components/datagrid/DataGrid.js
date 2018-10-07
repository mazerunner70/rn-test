import React from 'react';
import Table from './table';
import { MultiFieldForm } from '../simple-form';
import { FlexDiv } from './styled';



class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedRow:null}
    this.formUpdateNeeded = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, id) {
    console.log('332', e, id);
    this.formUpdateNeeded = true;
    this.setState({selectedRow: id});
  }

  render() {
    console.log('887', this.props);
    return (
      <div>
        <FlexDiv>
          <Table 
            header={this.props.columns} 
            body={this.props.data || [] } 
            selectedRow={this.state.selectedRow} 
            handleClick={this.handleClick}/>
          <MultiFieldForm 
            fields={this.props.columns} 
            onSubmit= { (e) => {this.props.onSubmit(e);}}
            initialValues={this.state.selectedRow}
            enableReinitialize
            onDelete={e=>this.props.onDelete(e, this.state.selectedRow)}/>
        </FlexDiv>
      </div>
    )
  }
}
export default DataGrid;