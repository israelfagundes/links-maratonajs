import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './styles/main.scss';

import App from './App';
import TokenRefresher from './components/TokenRefresher';

ReactDOM.render(
  <Provider store={store} >
    <TokenRefresher />
    <App />
  </Provider>, 
  document.getElementById('root')
);