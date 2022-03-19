import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './styles/styles.css'
import store from './store.js';

render(
    <App />
  // <Provider>
  // </Provider>,
  ,
  document.getElementById('root')
)