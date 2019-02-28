import React from 'react';
import injectSheet from 'react-jss';
import Header from '../../components/backgroundHeader';
import Centered from '../../components/centered';
import Subcategory from './subcategory';
import styles from './styles';

const Category = ({ classes, image, title }) => {
  return (
    <>
      <Header />
      <Centered id="Products" component="section">
        <article>
          <Subcategory />
          <Subcategory />
        </article>
      </Centered>
    </>
  );
}

Category.defaultProps = {
  image: 'https://api.comprea.com/bundles/asset/category/bg_header_008.jpg?s=web',
  title: 'Aceites, salsas y condimentos',
}

export default injectSheet(styles)(Category);
