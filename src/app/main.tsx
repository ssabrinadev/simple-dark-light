import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactRouterProvider } from '@providers';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <ReactRouterProvider />
    </Suspense>
  </StrictMode>,
);
