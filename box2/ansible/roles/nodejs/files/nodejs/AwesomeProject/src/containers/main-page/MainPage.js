import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AuthBar from '../../components/auth-bar';
import Banner from '../../components/banner';
import Navbar from '../../components/navbar';

const navbarOptions = [
  {
    name: 'About',
    handlePress: () => { console.log('hgk')}
  },
  {
    name: 'Misc',
    handlePress: () => { console.log('hgk')}
  },
]
const sidebarToggle = 
  {
    name: 'Sidebar',
    handlePress: () => { console.log('hgk')},
    sidebarButton: true
  }


function Layout(props) {
  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <AuthBar/>
      <Banner/>
      <Navbar options= {navbarOptions} toggle={sidebarToggle}/>
      <View style={{ flex: 1, flexDirection: 'row'}}>
      <View style={{width:100, backgroundColor: 'powderblue'}}/>
      <View style={{width:500, backgroundColor: 'skyblue'}}/>
      </View>
    </View>
  )
}
// function Layout(props) {
//   return (
//     <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
//       <View style={{height:20, backgroundColor: 'powderBlue'}}/>
//       <View style={{height:100, backgroundColor: 'skyBlue'}}/>
//       <View style={{height:20, backgroundColor: 'blue'}}/>
//       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
//         <View style={{width:'100', backgroundColor: 'powderBlue'}}/>
//         <View style={{width:'100', backgroundColor: 'skyBlue'}}/>    
//       </View>        
//     </View>
//   )
//}

export default Layout;