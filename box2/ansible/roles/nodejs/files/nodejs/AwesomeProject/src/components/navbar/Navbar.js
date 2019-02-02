import React from 'react';
import {Text, View } from 'react-native';
import { WhiteText, NavbarLink, NavbarView, NavbarButton, SidebarToggle } from './styled';
import {ResponsiveComponent } from 'react-native-responsive-ui';

const symbol = '\u{2630}';

class Navbar extends ResponsiveComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const navbarButtons = this.props.options.map((button) => {
      return (
        <NavbarLink 
          key={button.name} 
          to={button.linkTo}>
            <WhiteText>{button.name}</WhiteText>
        </NavbarLink>
      )
    });
    const sidebarToggle =
      <SidebarToggle 
        key={this.props.toggle.name} 
        onPress={this.props.toggle.handlePress}>
          {symbol}
      </SidebarToggle>

    return (
      <NavbarView>
        <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
          {navbarButtons}
        </View>
        <View>
          {sidebarToggle}
        </View>
      </NavbarView>
    )
  }
}

export default Navbar;