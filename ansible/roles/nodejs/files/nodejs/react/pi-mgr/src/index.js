import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import { store } from './state/store';

const render = () => {
  console.log('edfe');
  ReactDOM.render( 
    <Provider store={store}>
      < App2 /> 
    </Provider>, document.getElementById('root'));
}
render();
registerServiceWorker();