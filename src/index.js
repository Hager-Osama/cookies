import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
/* The following line can be included in your src/index.js or App.js file */
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);




