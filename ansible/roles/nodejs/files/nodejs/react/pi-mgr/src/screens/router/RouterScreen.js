import React from 'react';
import MainPage from '../../containers/main-page';
import { BrowserRouter } from 'react-router-dom';

function RouterScreen(props) {
  console.log('333', props);
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default RouterScreen;