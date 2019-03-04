import React from 'react';
import injectSheet from 'react-jss';
import Logo from '../svg/logo';
import styles from './styles';

const Header = ({ classes, onClick }) => {
  return (
    <header
      className={classes.container}
      onClick={onClick}
    >
      <section>
        <Logo className={classes.logo}/>
      </section>
    </header>
  );
}

Header.defaultProps = {
  image: '',
  title: '',
}

export default injectSheet(styles)(Header);
