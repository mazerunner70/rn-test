import styled from 'styled-components';
import { Field } from 'redux-form';

const FieldDiv = styled.div `
  width: 350px;
  overflow: auto;
  }
`;
const FieldLabel = styled.label `
  padding: 6px 0;
  width:25%
  float: left;
  text-align:center;
`;

const FieldInput = styled(Field) `

  float: left;
`;

export { FieldDiv, FieldLabel, FieldInput };