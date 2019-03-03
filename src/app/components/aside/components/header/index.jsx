import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../../../../../components/icon';
import styles from './styles';

const Header = ({ classes, market, postalcode, onClick }) => {
  return (
    <header className={classes.container}>
      <Icon
        className={classes.icon}
        icon={market.icon}
      />
      <div className={classes.info}>
        <div className={classes.name}>{market.name}</div>
        <div className={classes.postalcode}>Comprando en {postalcode}</div>
      </div>
      <button
        onClick={onClick}
        className={classes.button}
      >
        Cambiar
      </button>
    </header>
  )
}

export default injectSheet(styles)(Header);