import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// IMPORTANTE: aquí es donde Tailwind inyecta todas las utilidades.
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
