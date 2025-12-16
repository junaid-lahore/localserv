import type { AppProps } from "next/app";
import { OuterErrorBoundary } from "@/prod-components/OuterErrorBoundary";
import { ThemeProvider } from "@/internal-components/ThemeProvider";
import { DEFAULT_THEME } from "@/constants/default-theme";
import { AppProvider } from "@/components/AppProvider";
import "@/index.css";
import { Head } from "@/internal-components/Head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <AppProvider>
          <Head />
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </OuterErrorBoundary>
  );
}
