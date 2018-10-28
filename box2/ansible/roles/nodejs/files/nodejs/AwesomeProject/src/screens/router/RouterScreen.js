import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NativeRouter} from 'react-router-native';
import MainPage from '../../containers/main-page';


function RouterScreen(props) {
    return (
        <NativeRouter>
          <MainPage/>
        </NativeRouter>
    );
}
//<Text>hei</Text>
export default RouterScreen;
