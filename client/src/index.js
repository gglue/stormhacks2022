import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Going to use Learn as the main app component for now
//import App from './App';
import Learn from './Learn';

ReactDOM.render(
  <React.StrictMode>
    <Learn />
  </React.StrictMode>,
  document.getElementById('root')
);

