import React from 'react';
import injectSheet from 'react-jss';
import Overlay from '../../../components/overlay';
import Header from './header';
import styles from './styles';

const Aside = ({ classes, isOpened, closeAside, market }) => {
  return (
    <>
      <Overlay
        isOpened={isOpened}
        onClick={closeAside}
      />
      <nav className={classes.container}>
        <Header market={market} />
      </nav>
    </>
  )
}

export default injectSheet(styles)(Aside);