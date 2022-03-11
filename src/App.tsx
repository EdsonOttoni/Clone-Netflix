import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './themes/darkTheme';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
