import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import {worker} from './mock/browser';

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

mountApp();
