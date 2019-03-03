import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../../../../components/icon';
import Product from '../product';
import styles from './styles';

const SubCategory = ({ classes, title, icon, items }) => {
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
        {
          Object.values(items).map(item => (
            <li key={item.uuid} className={classes.product}>
              <Product
                name={item.name}
                price={item.price}
                image={item.pictures[0] ? item.pictures[0] : null}
              />
            </li>
          ))
        }
      </ul>    
    </section>
  );
}

SubCategory.defaultProps = {
  title: 'Title',
  icon: 'https://api.comprea.com/bundles/asset/category/ic_category_031.png',
}

export default injectSheet(styles)(SubCategory);
