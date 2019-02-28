import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';
import Sections from '../sections';
import Overlay from '../overlay';

const Aside = ({ classes, isOpened, close, categories, expand, collapse, select }) => {
  return (
    <>
      <Overlay isOpened={isOpened} onClick={close} />
      <nav className={classes.container}>
        <header className={classes.header}/>
        <Sections
          className={classes.sections}
          sections={categories}
          expand={expand}
          collapse={collapse}
          select={select}
        />
      </nav>
    </>
  );
}

export default injectSheet(styles)(Aside);
