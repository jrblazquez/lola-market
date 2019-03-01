import React from 'react';
import injectSheet from 'react-jss';
import globalStyles from '../styles/globalStyles';
import Category from './category';
import Categories from '../store/categories';

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
      <Categories />
      <Category />
    </div>
  )
};

export default injectSheet(styles)(App);
