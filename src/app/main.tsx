import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Core design tokens and styling layers */
import '../styles/tokens.css';
import '../styles/themes.css';
import '../styles/glass.css';
import '../styles/frosted-glass.css';
import '../styles/glass-lab.css';
import '../styles/base.css';
import '../styles/components.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find root element with id "root"');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
