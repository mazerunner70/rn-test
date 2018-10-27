import styled from 'styled-components';

const OffsetDiv = styled.div `
  position:relative;
  display:block;
  left: 0px;
  z-index: 0;
  @media (min-width:993px){
    left: 220px;
    margin-right: 220px;
  }  
`;

export { OffsetDiv };