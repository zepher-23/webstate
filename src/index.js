import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom" 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import '/node_modules/primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      
      <App />
      </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
