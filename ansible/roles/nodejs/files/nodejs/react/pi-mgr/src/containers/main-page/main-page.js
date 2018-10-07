import React, { Component } from 'react';
import Layout from '../../layouts/standard-wordpress';
import Banner from '../../components/banner/rasp-pi';
import { Navbar } from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import AboutPopup from '../../components/about';
import RootScreen from '../../screens/root';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import HomeScreen from '../../screens/home';
import DependencyScreen from '../../screens/dependency';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }
  
  navBarOptions = [
    { 
      name: 'About', 
      handleClick: () => { console.log('hjf'); this.props.showAboutModal(); }
    },
    { 
      name: 'Misc', 
      handleClick: () => { console.log('hjf'); this.props.showAboutModal(); }
    },
    {
      name: 'Sidebar',
      handleClick: () => { this.props.toggleSidebar(); },
      sidebarButton: true
    }
  ];

  sidebarOptions = [
    {
      name: 'Dependencies',
      linkRoute: 'dependency'
    },
    {
      name: 'Dependencies3',
      linkRoute: 'dependencies'
    },
    {
      name: 'Dependencies2',
      linkRoute: 'dependencies'
    },
  ];


  render() {
    return(
      <div>
         <AboutPopup open={this.props.isModalVisible}  handleClose={this.props.hideAboutModal}/>
          <Layout 
            banner={<Banner/>} 
            navbar={<Navbar options={this.navBarOptions}/>}
            sidebar={<Sidebar isVisible={this.props.isSidebarVisible} options={this.sidebarOptions} closeSidebar={this.props.closeSidebar}/>}
            rootScreen={<RootScreen isVisible={this.props.isSidebarVisible}/>}/>
      </div>
    );
  }
}

export default MainPage;