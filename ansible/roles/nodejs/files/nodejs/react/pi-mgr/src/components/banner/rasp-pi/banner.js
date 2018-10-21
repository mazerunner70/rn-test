import React from 'react';
import rasppi from './raspberry-pi.jpg';
import { ScaledImg, HorizCenterDiv, BannerText, BannerDiv, HorizDiv1, HorizDiv2, HorizDiv3 } from './styled';



function Banner(props) {
  return (
    <BannerDiv>
    <HorizCenterDiv>
      <HorizDiv1>
        <BannerText>Raspberry Pi</BannerText>
      </HorizDiv1>
      <HorizDiv2><ScaledImg src={ rasppi }/></HorizDiv2>
      <HorizDiv3>
        <BannerText>Management</BannerText>
      </HorizDiv3>
    </HorizCenterDiv>
    </BannerDiv>
  );
}

export default Banner;