import React from 'react';
import { SidebarDiv, Header, CloseLink, CloseIcon, MenuOption, StyledLink } from './styled';

export function SideBarButton() {
  return (
    // eslint-disable-next-line
    <a href='javascript:void(0)' ><i/></a>
  );
}

class Sidebar extends React.Component {
  componentWillMount() {
    console.log('111');
    // this.props.history.listen(()=> {
    //   console.log('New URL:', this.props.history.location.pathname);
    // })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('13this props', this.props);
    console.log('13ext props', nextProps);
    return true;
  }


  render() {
    console.log('331');
    const menuOptions = this.props.options.map((option) => {
      return (<MenuOption key={option.name} ><StyledLink key={option.name}  to={option.linkRoute}>{option.name}</StyledLink></MenuOption> );
    });
    return (
      <SidebarDiv isVisible={this.props.isVisible}>
        <Header><b>Menu</b></Header>
        <CloseLink onClick={this.props.closeSidebar}>
          <CloseIcon/>
        </CloseLink>
        { menuOptions }
      </SidebarDiv>
    );
  }

}

// export default withRouter(Sidebar);
export default Sidebar;