import styled from 'styled-components/native';
import {Device, MediaQuerySelector } from 'react-native-responsive-ui';

function getPortraitQuery() {
  const { width, height} = Device.dimensions.window;
  return MediaQuerySelector.query({orientation: "portrait", minHeight: 459}, width, height);
}

const BannerView = styled.View `
  background: #F0EFF5;
  height: auto;
  flex-direction: row;
  alignItems: center;
  justifyContent: center;
`;

const ColumnView = styled.View `
  flexDirection: column;
  alignItems: flex-end;
`;

const View1 = styled.View `
`;
const Text1 = styled.Text `
  font-family: 'monospace';
  font-size: 30;
`;
const View2 = styled.View `

`;
const Image2 = styled.Image `
  width:${() => getPortraitQuery()?'135':'90'};
  height:${() => getPortraitQuery()?'120':'80'};
`;
const View3 = styled.View `
  display: ${() => getPortraitQuery()?'none':'flex'};
`;
const Text3 = styled.Text `
  font-family: 'monospace';
  font-size: 30;
`;
const View4 = styled.View `
  display: ${() => getPortraitQuery()?'flex':'none'};
`;
const Text4 = styled.Text `
  font-family: 'monospace';
  font-size: 30;
`;

export { BannerView, ColumnView, View1, Text1, View2, Image2, View3, Text3, View4, Text4 };