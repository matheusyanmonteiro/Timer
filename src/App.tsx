import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';

import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello world</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
