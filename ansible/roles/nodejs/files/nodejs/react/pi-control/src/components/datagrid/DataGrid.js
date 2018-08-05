import  React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import styled from 'styled-components';
import { clone } from 'lodash';


import { store } from '../../store';
// import './datagrid.css';
// import 'App.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const OutSideDiv = styled.div `
  padding: 50px;
  display: inline-block;
  float: left;
  marginTop: 50;
`;
const ColumnDiv = styled.div `
  float: left;
`;
const StyledTable = styled(BootstrapTable)``;
// https://www.styled-components.com/docs/advanced#referring-to-other-components

const StyleBTable = styled.div`
  border: 2px solid #ffffff;
  width: 100%;
  text-align: center;
  table {
    border-collapse: collapse;
    border-spacing: 0px;  
  }
  tbody tr:nth-child(even) {
    background-color:#ebebeb;
  }
  tbody tr:nth-child(odd) {
    background-color:#ffffff;
  }
  td, th {
    padding 3px 4px;
  }
  tbody td {
    font-size: 13px;
  }
  thead {
    background: #ffffff;
  }
  thead th {
    font-size: 14px;
    font-weight: bold;
    color:#333333;
    text-align: center;
    border-left: 2px solid #333333;
    border-bottom: 4px solid #333333;    
  }
  thead th:first-child {
    border-left: none;
  }
`;

 
export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    console.log('-0=', this.props);
    const values = this.props.columnData.columns.map (({dataField}) => {
      return {[dataField]:''};
    });
    this.state = {values: values };
    // this.handleChange = this.handleChange.bind(this);
  }
  
  selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectColumn: true,
    bgColor: '#00Bfff',
    onSelect: (row, isSelect, rowIndex, e) => {
        console.log('990',row);
        console.log('001', rowIndex);
        console.log('001', isSelect);
        console.log('001', e);
      if (isSelect) {
        const values = clone(row, true);
        this.setState({
          ...this.state, values: values
        });

      } else {
        const values = this.props.columnData.columns.map (({dataField}) => {
          return {[dataField]:''};
        })
        this.setState({
          ...this.state, values: values
        });
      }
    }
  };

  render() {
    const columnData = this.props.columnData;
    console.log('-0-', this.props);
    const content = this.props.content;
    return (
      <OutSideDiv>
        <ColumnDiv>
          <StyleBTable>
            <StyledTable 
            keyField='name' 
            data={ content } 
            columns={ columnData.columns} 
            selectRow = {this.selectRow} />
            </StyleBTable>
          </ColumnDiv>
          <ColumnDiv>
            <GridEditor inputValues={this.state.values} columns={ columnData.columns }/>
        </ColumnDiv>
      </OutSideDiv>
    );
  }
}


const EditBoxDiv = styled.div `
  max-width: 400px;
  margin: 0px auto;
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
const FieldsHeader = styled.span `
  display: block;
  text-align: left;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5c5c5c;
  font-size: 13px;
`;
const FieldsList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
`;
const FieldEntry = styled.li `
  display: block;
  padding: 9px;
  border: 1px solid #DDDDDD;
  margin-bottom: 30px;
  border-radius: 3px;
  &:last-child {
    border: none;
    margin-bottom: 30px;
    border-radius: 3px;
  }
`;
const EntryLabel = styled.label `
  display: block;
  float: left;
  margin-top: -19px;
  background: #ffffff;
  height: 14px;
  padding: 2px 5px 2px 5px;
  color: #b9b9b9;
  font-size: 14px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;
const EntryInput = styled.input `
  box-sizingL border-box;
  moz-box-resizing:border-box;
  width: 100%
  display:block;
  outline: none;
  border: none;
  height: 25px;
  line-height: 25px
  font-size:16px;
  padding: 0;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const InputPrompt = styled.span `
  background: #f3f3f3;
  diaply:block;
  padding: 3px;
  margin: 0 -9px -9px -9px;
  text-align: center;
  color: #c0c0c0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
`;

const SubmitButton = styled.input `
  background: #2471ff;
  border: none;
  padding: 10px 20px 10px 20px;
  border-bottom: 3px solid #5994ff;
  border-radius: 3px;
  color: #d2e2ff;
  &:hover {
    background: #6b9fff;
    color: #fff;
  }
`;

class GridEditor extends React.Component {

  
  // form details from https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a
  constructor (props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      console.log('00-', this.props);
  }
  handleSubmit(event) {
    console.log('fields', this.props);
    // Assume add for now
    event.preventDefault();
    const addGridRowAction = {
      type:'addRowToDataGrid',
      payload: this.state,
    }
    store.dispatch(addGridRowAction);
  }
  
  handleChange (event) {
    this.setState({
        [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  render() {
    const fields = this.props.columns.map(({ dataField, text, prompt }) => {
      const newState = this.props.inputValues[dataField] || '';
      return (
        <FieldEntry key={dataField}>
          <EntryLabel key={dataField+'e'} htmlFor={dataField}>{text}</EntryLabel>
          <EntryInput name={dataField+'i'} type="text" maxLength='100' value={newState} onChange={this.handleChange}/>
          <InputPrompt key={dataField+'p'}>{prompt}</InputPrompt>
        </FieldEntry>
      );
    }); 
    return (
      <EditBoxDiv>
          <FieldsHeader>Select row to edit</FieldsHeader>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <FieldsList>
                {fields}
                <FieldEntry>
                  <SubmitButton type="submit" value="Submit" />
                </FieldEntry>
              </FieldsList>
          </form>
      </EditBoxDiv>
    );
  }

}