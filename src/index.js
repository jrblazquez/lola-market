import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { ThemeProvider } from 'react-jss';
import theme from './styles/theme';
import App from './app';
import { configureStore } from './store'

const jss = createJss();
jss.use(preset());

const store = configureStore();

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
