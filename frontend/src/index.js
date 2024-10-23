import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // Assurez-vous que BrowserRouter est bien importé
import App from './App';
import { EmploiContextProvider } from './context/EmploiContext';
ReactDOM.render(
  <BrowserRouter>
  <EmploiContextProvider>
    <App />
    </EmploiContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);