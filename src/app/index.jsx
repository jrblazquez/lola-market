import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
  }
});

const App = ({ classes }) => (
  <div className={classes.container}>¡HOLA LOLA!</div>
);

export default injectSheet(styles)(App);
