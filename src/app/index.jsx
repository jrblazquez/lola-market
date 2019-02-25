import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      backgroundColor: theme.palette.background.default,
      '@media print': {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  container: {
    backgroundColor: theme.palette.primary,
    display: 'flex',
  }
});

const App = ({ classes }) => (
  <div className={classes.container}>¡HOLA LOLA!</div>
);

export default injectSheet(styles)(App);
