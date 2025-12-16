import { Head } from "./internal-components/Head";
import { OuterErrorBoundary } from "./prod-components/OuterErrorBoundary";
import { ThemeProvider } from "./internal-components/ThemeProvider";
import { DEFAULT_THEME } from "./constants/default-theme";


export const AppWrapper = () => {
  return (
    <OuterErrorBoundary>
      <ThemeProvider defaultTheme={DEFAULT_THEME}>
        <Head />
      </ThemeProvider>
    </OuterErrorBoundary>
  );
};
