import { StrictMode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { useTheme } from 'next-themes';
import { BrowserRouter } from 'react-router';
import App from '../App';

export function Root({ queryClient }) {
    const { theme } = useTheme();
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                    <Toaster theme={theme === 'dark' ? 'dark' : 'light'} richColors duration={10000} />
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </StrictMode>
    );
}