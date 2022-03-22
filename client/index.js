import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './styles/styles.scss'

//attach app to index.html
render(
    <App />
  ,
  document.getElementById('root')
)