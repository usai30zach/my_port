import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './App.jsx';
import './index.css'; // Only if you have Tailwind via PostCSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
