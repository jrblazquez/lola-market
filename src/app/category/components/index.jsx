import React from 'react';
import injectSheet from 'react-jss';
import Header from '../../../components/backgroundHeader';
import Centered from '../../../components/centered';
import Subcategory from './subcategory';
import styles from './styles';

const Category = ({ classes, category, items }) => {
  return (
    <>
      <Header 
        title={category.name}
        image={category.picture}
      />
      <Centered id="Products" component="section">
        <article>
          <Subcategory items={items.toJS()}/>
        </article>
      </Centered>
    </>
  );
}

Category.defaultProps = {
  category: {},
  items: [],
}

export default injectSheet(styles)(Category);