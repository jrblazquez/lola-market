import React from 'react';
import injectSheet from 'react-jss';
import Link from 'redux-first-router-link';
import { actions } from 'store/location';
import styles from './styles';


const NotFound = ({ classes }) => {
  return (
    <div className={classes.container}>
      <p>This page is not developed... YET :(</p>
      <Link to={actions.goMarket({ marketName: 'mercadona' })}>
        Go to Mercadona
      </Link>
    </div>
  );
}

NotFound.defaultProps = {
  category: {},
  items: [],
}

export default injectSheet(styles)(NotFound);
