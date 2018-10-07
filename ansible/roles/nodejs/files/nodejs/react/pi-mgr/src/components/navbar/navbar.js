import React from 'react';
import { NavbarButton, NavBarDiv, SidebarToggle, BarSymbol } from './styled';

const Navbar = (props) => {
  const buttons = props.options.map((button) => {
    console.log('342', button);
    return button.sidebarButton ?
        <SidebarToggle key={button.name} onClick={button.handleClick}>
          <BarSymbol/>
        </SidebarToggle>
      :
        <NavbarButton key={button.name} onClick={button.handleClick}>
          {button.name}
        </NavbarButton>
  });
  return (
    <NavBarDiv>
      {buttons}
    </NavBarDiv>
  );
}

export { Navbar };