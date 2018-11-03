import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

function Layout(props) {
  return (
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', height:60, backgroundColor: 'powderblue'}}>
        <Text >  Heii  </Text>
      </View>
      <View style={{height:60, backgroundColor: 'skyblue'}}>
        <Text >Heiiyy</Text>
      </View>
      <View style={{height:20, backgroundColor: 'blue'}}/>
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