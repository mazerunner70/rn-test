import React from 'react';
import styled from 'styled-components/native';
import Button from 'react-native-button';

const FloatRightView = styled.View `
  backgroundColor: black;
  height: 50;
  flexDirection: row;
  justifyContent: flex-end;
`;

const ColouredButton = styled(Button) `
  color: white;
  backgroundColor: black;
  padding: 10px 10px 5px 5px;
`;

export { FloatRightView, ColouredButton };

//flex: 1, , justifyContent: 'flex-end'