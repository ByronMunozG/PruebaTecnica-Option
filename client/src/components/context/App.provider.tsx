import { MantineProvider } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider
      theme={{ colorScheme: 'dark', loader: 'bars' }}
      withNormalizeCSS
      withGlobalStyles
    >
      {children}
    </MantineProvider>
  </QueryClientProvider>
);

export default AppProvider;
