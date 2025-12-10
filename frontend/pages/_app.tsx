import type { AppProps } from 'next/app';
import '../src/index.css';
import { OuterErrorBoundary } from '../src/prod-components/OuterErrorBoundary';
import { ThemeProvider } from '../src/internal-components/ThemeProvider';
import { DEFAULT_THEME } from '../src/constants/default-theme';
import { Head as AppHead } from '../src/internal-components/Head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <Component {...pageProps} />
        <AppHead />
      </ThemeProvider>
    </OuterErrorBoundary>
  );
}