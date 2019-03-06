import React from 'react';
import injectSheet from 'react-jss';
import globalStyles from '../../styles/globalStyles';
import Aside from './aside';
import Header from './header';

const styles = theme => ({
  '@global': globalStyles(theme),
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
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
      <Header />
      <Aside />
      <Component />
    </div>
  )
};

export default injectSheet(styles)(App);
