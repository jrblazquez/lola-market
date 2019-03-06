import React from 'react';
import injectSheet from 'react-jss';
import Header from 'components/marketHeader';
import Centered from 'components/centered';
import Subcategory from 'components/subcategory';
import styles from './styles';

const Category = ({ classes, market, category, subcategory, openAside, itemsByCategories }) => {
  return (
    <>
      <Header
        market={market}
        category={category}
        title={subcategory.name}
        image={subcategory.picture}
      />
      <Centered
        id="Products"
        component="section"
      >
        { 
          itemsByCategories.map(category => {
            return (
              <article>
                <Subcategory
                  title={category.name}
                  icon={category.icon}
                  showHeader={itemsByCategories.size > 1}
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
