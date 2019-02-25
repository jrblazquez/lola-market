import React from 'react';
import { render } from 'react-dom';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { ThemeProvider } from 'react-jss';
import theme from './theme';
import App from './app';

const jss = createJss();
jss.use(preset());

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
