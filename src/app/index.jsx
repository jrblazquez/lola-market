import React from 'react';
import injectSheet from 'react-jss';
import globalStyles from '../styles/globalStyles';
import Categories from '../store/categories';

const styles = theme => ({
  '@global': globalStyles(theme),
  container: {
    display: 'flex',
  },
  prueba: {
    zIndex: 10,
    //backgroundColor: 'red',
    width: '100%',
    height: '100vh',
  }
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <Categories />
    <div className={classes.prueba}>PRUEBA</div>
  </div>
);

export default injectSheet(styles)(App);
