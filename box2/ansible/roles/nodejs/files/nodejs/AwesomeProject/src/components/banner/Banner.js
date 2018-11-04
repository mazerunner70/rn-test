import React from 'react';
import rasppi from './raspberry-pi.jpg';
import { BannerView, ColumnView, View1, Text1, View2, Image2, View3, Text3, View4, Text4 } from './styled';
import {ResponsiveComponent } from 'react-native-responsive-ui';


class Banner extends ResponsiveComponent {

  render() {
    return (
      <BannerView>
        <ColumnView style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <View1><Text1>Raspberry Pi</Text1></View1>
          <View4><Text4>Management</Text4></View4>
        </ColumnView>
        <View2><Image2 source={rasppi} /></View2>
        <View3><Text3>Management</Text3></View3>
      </BannerView>
    );
  }
}

export default Banner;