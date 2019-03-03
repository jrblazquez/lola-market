import React from 'react';
import injectSheet from 'react-jss';
import Overlay from '../../../../components/overlay';
import Header from './header';
import Categories from './categories';
import styles from './styles';

const Aside = ({ classes, isOpened, closeAside, market, categories, expand, collapse, select, categoriesSelected, postalcode }) => {
  return (
    <>
      <Overlay
        isOpened={isOpened}
        onClick={closeAside}
      />
      <nav className={classes.container}>
        <Header
          market={market}
          postalcode={postalcode}
        />
        <Categories
          className={classes.categories}
          categories={categories}
          categoriesSelected={categoriesSelected}
          expand={expand}
          collapse={collapse}
          select={select}
        />
      </nav>
    </>
  )
}

export default injectSheet(styles)(Aside);