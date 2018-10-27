import React from 'react';
import MainPage from '../../containers/main-page';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from '../../state/api/auth/history';

function RouterScreen(props) {
  console.log('333', props);
  return (
    <Router history={history}>
      <MainPage />
    </Router>
  );
}

export default RouterScreen;