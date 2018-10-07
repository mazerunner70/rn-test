import styled from 'styled-components';

const ScaledImg = styled.img `
  width: 100%;
  height: auto;
  object-fit: scale-down;
  vertical-align: top;
  height: 150px;
  @media (max-width:650px){
    max-height: 50px;
  }

`;
const HorizDiv = styled.div `
  float: left;
`;
const HorizDiv1 = styled.div `
  order: 1;
  @media (max-width:650px){
    order: 2;
  }
`;
const HorizDiv2 = styled.div `
  order: 2;
  @media (max-width:650px){
    order: 1;
  }

`;
const HorizDiv3 = styled.div `
  order: 3;
`;

const BannerDiv = styled.div `
  background: #F0EFF5;
`;

const HorizCenterDiv = styled.div `
  margin: 0 auto; /* centers the div horizontally */
  width: 650px;
  /* trying for flex box */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BannerText = styled.div `
  font-family: "Courier New", Courier, monospace;
  font-size: 2.5em;
  white-space: nowrap;
  padding: 0px 7px;
  @media (max-width:650px){
    font-size: 4.5vw;
  }

`;

export { ScaledImg, HorizDiv, HorizCenterDiv, BannerText, BannerDiv, HorizDiv1, HorizDiv2, HorizDiv3 };