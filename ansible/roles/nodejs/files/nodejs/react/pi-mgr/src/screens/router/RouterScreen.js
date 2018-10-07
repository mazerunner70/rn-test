import React from 'react';
import MainPage from '../../containers/main-page';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomeScreen from '../home';
import DependencyScreen from '../dependency';

function RouterScreen(props) {
  console.log('333', props);
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default RouterScreen;