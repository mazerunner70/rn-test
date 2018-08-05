import React, { Component } from 'react';
import 'App.css';
import { ToggleSideBar } from '../sidebar/SideBar';

class NavOption extends Component {
    render() {
        let classNames = 'w3-bar-item w3-button w3-theme-l1';
        if (this.props.compressLevel > 1) { classNames += ' w3-hide-small' }
        return ( 
          <a href = "#" className = { classNames }>{ this.props.name }</a>
        );

    }
}

export default class NavBar extends Component {
    renderNavOption(name, compressLevel) {
        return (
            <NavOption name = { name }
                compressLevel = { compressLevel }
        />);
    }
    render() {
        return ( 
          <div className = "w3-top" >
            <div className = "w3-bar w3-theme w3-left-align w3-large" >
              <ToggleSideBar/>
             { this.renderNavOption('Logo', 1) } 
             { this.renderNavOption('About', 2) } 
            </div> 
          </div >
        );
    }
}