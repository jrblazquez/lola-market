import React from 'react';
import injectSheet from 'react-jss';
import Header from '../../../../components/backgroundHeader';
import Centered from '../../../../components/centered';
import Subcategory from './subcategory';
import styles from './styles';

const Category = ({ classes, categories, items, openAside, market }) => {
  return (
    <>
      <Header 
        title={market.name}
        image={market.picture}
        icon={market.icon}
        onClick={openAside}
      />
      <Centered id="Products" component="section">
        { 
          categories.map(category => {
            return (
              <article>
                <Subcategory
                  title={category.name}
                  icon={category.icon}
                  items={category.items}
                />
              </article>
            )
          })
        }
        
      </Centered>
    </>
  );
}

Category.defaultProps = {
  category: {},
  items: [],
}

export default injectSheet(styles)(Category);
