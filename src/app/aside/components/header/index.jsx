import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Header = ({ classes, market }) => {
  console.log(market)
  return (
    <header className={classes.container}>
      <div>{market.name}</div>
    </header>
  )
}

export default injectSheet(styles)(Header);