import styled from 'styled-components';


const NavbarButton = styled.button `
   padding: 8px 16px;
   float: left;
   border: none;
   color: inherit;
   background-color: inherit;

   &:hover {
     background-color: #555;
   }
`;

const SidebarToggle = styled(NavbarButton)`
  float: right;
`;

const NavBarDiv = styled.div `
   color: white;
   background-color: black;
   width: 100%;

`;

const BarSymbol = styled.i `
  &:before {
    content: "\\2630";
  }
  @media (min-width:993px){
    display:none!important;
  }
`;

export { NavbarButton, NavBarDiv, SidebarToggle, BarSymbol };