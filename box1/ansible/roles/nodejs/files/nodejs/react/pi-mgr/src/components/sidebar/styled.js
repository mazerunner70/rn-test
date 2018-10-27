import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SidebarDiv = styled.div `
  width: 200px;
  background-color: black;
  color: white;
  overflow: auto
  float:left;
  @media (max-width:993px){
    display: ${props => props.isVisible ? 'block' : 'none'};
  }
  display: 'block';
  position:absolute;
  z-index:1;
  
`;

const Header = styled.h4 `
  float: left;
  display:block;
  padding:8px 16px;
  text-align:left;
  outline:0
  width: 50%;
`;

const CloseLink = styled.a `
  float: right;
  font-size: 24px;
  padding: 12px 24px;
  color:#fff!important;
  background-color:#000!important;
  @media (min-width:993px){
    display:none!important
  }
  vertical-align: top;
`;

const CloseIcon = styled.i `
  display:inline-block;
  &:before {
    content:"\\2613";
  }
`;

const MenuOption = styled.div `
  width:100%;
  display:block;
  padding:8px 16px;
  text-align:left;
  border:none;
  white-space:normal;
  float:none;
  white-space:normal;
  }
`;
const StyledLink = styled(Link) `
    color:#fff!important;
    background-color:#000!important
    font-weight:550;
  &:link {
    text-decoration: none;

  }
  &:hover {
    color:#fff!important;
    background-color:#000!important

`;

export { SidebarDiv, Header, CloseLink, CloseIcon, MenuOption, StyledLink };