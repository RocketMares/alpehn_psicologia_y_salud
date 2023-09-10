import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './App';
import './fonts/fontawesome-free-6.4.2-web/css/all.min.css';
import './fonts/DM Sans/dmsans.css';
import './css/reset.css';
import './css/misCSS.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>
);

