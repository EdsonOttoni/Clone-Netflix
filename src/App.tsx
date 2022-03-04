import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './themes/darkTheme';

import DashBoard from './pages/DashBoard';
import Browser from './pages/Browser';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Browser/>
    </ThemeProvider>
  );
}

export default App;
