import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Se você tiver um arquivo CSS global

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);