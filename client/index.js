import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './styles/styles.scss'


render(
    <App />
  ,
  document.getElementById('root')
)