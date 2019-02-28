import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../../../components/icon';
import Product from '../product';
import styles from './styles';

const SubCategory = ({ classes, title, icon }) => {
  return (
    <section>
      <header className={classes.header}>
        <h2 className={classes.title}>
          <Icon icon={icon} />
          <span>{title}</span>
        </h2>
        <a className={classes.link} href="#">Ver más</a>
      </header>
      <ul className={classes.products}>
        <li className={classes.product}><Product /></li>
        <li className={classes.product}><Product /></li>
        <li className={classes.product}><Product /></li>
        <li className={classes.product}><Product /></li>
        <li className={classes.product}><Product /></li>
        <li className={classes.product}><Product /></li>
      </ul>    
    </section>
  );
}

SubCategory.defaultProps = {
  title: 'Title',
  icon: 'https://api.comprea.com/bundles/asset/category/ic_category_031.png',
}

export default injectSheet(styles)(SubCategory);
