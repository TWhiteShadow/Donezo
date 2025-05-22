import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient } from '@tanstack/react-query';
import { Root } from './components/Root';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    value={{
      light: "light",
      dark: "dark",
      system: "system",
      pink: "pink",
      green: "green",
      purple: "purple",
    }}
  >
    <Root queryClient={queryClient} />
  </ThemeProvider>
)
