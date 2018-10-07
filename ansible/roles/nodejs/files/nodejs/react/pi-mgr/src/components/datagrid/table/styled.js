import styled from 'styled-components';


const StyledTable = styled.table `
  border: 1px solid black;
`;

const Header = styled.thead `
  background-color: LightGrey;
`;

const Cell = styled.td `
  padding: 3px;
  text-align: center;
`;

const TableRow = styled.tr `
  background-color: ${props=> props.selectedRow? 'Lightblue':'White'};
`

const ColumnHeader = styled.th `
  padding: 3px;
  text-align: center;
`;

export { StyledTable, Header, Cell, ColumnHeader, TableRow } ;