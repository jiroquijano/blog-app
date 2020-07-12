import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSearch,faPlusCircle, faHome} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(fab,faPlusCircle,faSearch, faHome);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
