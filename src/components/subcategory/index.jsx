import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../icon';
import Product from '../product';
import styles from './styles';

const SubCategory = ({ classes, title, icon, items, showHeader }) => {
  return (
    <section>
      { 
        showHeader && items.size > 0 ? (
          <header className={classes.header}>
            <h2 className={classes.title}>
              { icon ? <Icon icon={icon} /> : null }
              <span>{ title }</span>
            </h2>
            <a className={classes.link} href="#">Ver más</a>
          </header>
        ) : null
      }
      <ul className={classes.products}>
        {
          items.map(item => (
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
  title: '',
  icon: '',
}

export default injectSheet(styles)(SubCategory);
