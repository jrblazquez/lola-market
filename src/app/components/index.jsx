import React from 'react';
import injectSheet from 'react-jss';
import globalStyles from '../../styles/globalStyles';
import Aside from './aside';

const styles = theme => ({
  '@global': globalStyles(theme),
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  prueba: {
    zIndex: 10,
    width: '100%',
    height: '100vh',
  }
});

const App = ({ classes, Component }) => {
  return (
    <div className={classes.container}>
      <Aside />
      <Component />
    </div>
  )
};

export default injectSheet(styles)(App);
