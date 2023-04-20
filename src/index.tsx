import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "./i18n";
import { AllContextProvider } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>
);