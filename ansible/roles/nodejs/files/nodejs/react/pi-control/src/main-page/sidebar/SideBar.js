import React, { Component } from 'react';
import 'App.css';

class MenuOption extends Component {
    render() {
      console.log(';;',this.props.handleClick);
        return ( 
          <a className = 'w3-bar-item w3-button w3-hover-black' 
             onClick = {this.props.handleClick}
             href = 'javascript:void(0)' > { this.props.name } 
          </a>
        )
    }
}

export class ToggleSideBar extends Component {
  render() {
    return (
      <a className='w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1'
        href='javascript:void(0)' onClick = { SideBarMenu.toggle } >
        <i className='fa fa-bars'/>
      </a>
    );
  }
}

export default class SideBarMenu extends Component {
  constructor (props) {
    super(props);

  }

  static getElements() {
    return {
      sideBarMenu: document.getElementById('main-sidebar'),
      sideBarOverlay: document.getElementById('sidebar-overlay')
    }
  }

  static toggle() {
    const {sideBarMenu, sideBarOverlay } = SideBarMenu.getElements();
    if (sideBarMenu === null || sideBarOverlay == null) return;
    const setting = sideBarMenu.style.display === 'block' ? 'none' : 'block';
    sideBarMenu.style.display = setting;
    sideBarOverlay.style.display = setting;
  }

  static close() {
    const {sideBarMenu, sideBarOverlay } = SideBarMenu.getElements();
    if (sideBarMenu === null || sideBarOverlay == null) return;
    sideBarMenu.style.display = 'none';
    sideBarOverlay.style.display = 'none';
  }
  render() {
    
    const options = this.props.menuOptions.map(({name, handleClick}, id) => {
      console.log(name, handleClick);
      return ( <MenuOption key={name} name={name} handleClick={handleClick}/>);
    });
    
    return ( 
      <div>
        <nav className = 'w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left'
          id = 'main-sidebar' >
            <a href = 'javascript:void(0)'
              onClick = { SideBarMenu.close }
              className = 'w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large'
              title = 'Close Menu' >
              <i className = "fa fa-remove"/>
            </a>
            <h4 className='w3-bar-item'><b>Menu</b></h4>
            {options}            
        </nav>
        <div className ="w3-overlay w3-hide-large" 
          onClick={ SideBarMenu.close }
          style={{cursor:'pointer'}} 
          title="close side menu" 
          id="sidebar-overlay"/>
      </div>
    );
  }
}