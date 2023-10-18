import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contado from './components/Contado';
import DibujosComplejosReact from './components/DibujosComplejosReact';
import DidujosComplejos from './components/DibujosComplejos';
import PadreDeportes from './components/PadreDeportes';
import HijoDeportes from './components/HijoDeportes';
import PadreNumeros from './components/PadreNumeros';
import Comics from './components/Comics';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <Comics></Comics>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
