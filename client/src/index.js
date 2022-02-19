import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Going to use Learn as the main app component for now
//import App from './App';
import Learn from './Learn';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Learn />
  </React.StrictMode>,
  document.getElementById('root')
);


