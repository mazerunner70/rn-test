import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { WhiteText, FloatRightView, ColouredButton, LoggedInView } from './styled.js';

function AuthBar(props) {
  return (
    <FloatRightView>
      {
        props.isAuthenticated ?
          <LoggedInView>
            <WhiteText >Logged in as: {props.username}</WhiteText>
            <ColouredButton onPress={props.handleLogout} title='Login'>Logout</ColouredButton>
          </LoggedInView> :
          <ColouredButton onPress={props.handleLogin} title='Login'>Login</ColouredButton>
      }
    </FloatRightView>      
  );
}

export default AuthBar;