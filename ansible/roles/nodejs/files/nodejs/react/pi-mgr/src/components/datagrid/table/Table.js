import React from 'react';
import { StyledTable, Header, Cell, ColumnHeader, TableRow } from './styled';

function JS2Render(row: {}) {
  const valueMapping = {
    'name': value => value,
    'currVer': value => value ,
    'lastCheck': value => value.format( 'DD-MM-YYYY' )
  } 
  const result = {};
  Object.entries(row).forEach( ([key, value]) => {
    result[key] = valueMapping[key](value);
  })

  // console.log('006', result);
  return result;
}



function Table (props){
  console.log('112', props);
  const headers = props.header.map((header) => {
    return (<ColumnHeader key={header.text}>{header.text}</ColumnHeader>);
  });
  const body = props.body.map((row) => {
    const renderRow = JS2Render(row);
    console.log('556', row, renderRow);
    const cells = ['name','currVer','lastCheck'].map((property) => {
      //console.log('555', property, typeof(row[property]));
      return (<Cell key={property}>{renderRow[property]}</Cell>)
    });
    console.log('223', cells);
    return (<TableRow key={row.name} selectedRow={props.selectedRow && props.selectedRow.name === row.name} onClick={e=>props.handleClick(e, row)}>{cells}</TableRow>);
  });
  return (
    <StyledTable>
      <Header>
        <tr>{headers}</tr>
      </Header>
      <tbody>
        {body}
      </tbody>
    </StyledTable>
  );  
}

export default Table;