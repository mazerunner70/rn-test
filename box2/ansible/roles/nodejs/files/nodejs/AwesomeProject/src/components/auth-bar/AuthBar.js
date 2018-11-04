import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { FloatRightView, ColouredButton } from './styled.js';

function AuthBar(props) {
  return (
    <FloatRightView>
      {
        props.isAuthenticated ?
          <View>
            <Text >Logged in as: {props.name}</Text>
            <Button onPress={props.handleLogout} title='Logout'/>
          </View> :
          <ColouredButton onPress={props.handleLogin} title='Logino'>Login</ColouredButton>
      }
    </FloatRightView>      
  );
}

export default AuthBar;