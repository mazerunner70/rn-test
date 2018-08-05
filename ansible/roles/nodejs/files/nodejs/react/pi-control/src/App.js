import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './main-page/navbar/NavBar';
import SideBarMenu from './main-page/sidebar/SideBar';
import ContentPane from './main-page/contentpane/ContentPane';
import DependencyAdmin from './content/dependency-admin/DependencyAdminLink';
import { store } from './store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mainRender:null}
  }

  handleDataGrid() {
    console.log('here', store.getState());
    this.setState({
      mainRender:<DependencyAdmin />
    });
  }
  render() {
    const menuOptions = [
      {name:'Menu1', handleClick: null},
      {name:'Menu2', handleClick: null},
      {name:'Menu3', handleClick: null},
      {name:'Menu5', handleClick: this.handleDataGrid.bind(this)},
    ];
    return (
      <div className = "App" >
        
        <NavBar />
        <SideBarMenu menuOptions={menuOptions}/>
        <ContentPane contentRender={this.state.mainRender}/>
      </div>
    );
  }
}

export default App;
