import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{ colorScheme: 'dark', loader: 'bars' }}
        withNormalizeCSS
        withGlobalStyles
      >
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
