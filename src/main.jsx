import React from 'react';
import { createRoot } from 'react-dom/client'; // Use named import for createRoot
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);