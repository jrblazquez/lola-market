import React from 'react';
import injectSheet from 'react-jss';
import globalStyles from '../styles/globalStyles';
import Aside from './aside';
import Category from './category';

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

const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Aside />
      <Category />
    </div>
  )
};

export default injectSheet(styles)(App);
