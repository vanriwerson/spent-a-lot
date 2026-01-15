import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ===============================
// Service Worker (PWA)
// ===============================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/spent-a-lot/service-worker.js')
      .then((registration) => {
        console.log(
          '✅ Service Worker registrado com sucesso:',
          registration.scope
        );
      })
      .catch((error) => {
        console.error('❌ Falha ao registrar Service Worker:', error);
      });
  });
}
