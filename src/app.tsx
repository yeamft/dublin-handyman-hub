import { createApp } from '@tanstack/start';
import { getRouter } from './router';

const router = getRouter();

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = createApp({ router });