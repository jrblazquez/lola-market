import React from 'react';
import injectSheet from 'react-jss';
import Centered from '../../../../components/centered';
import Subcategory from '../../../../components/subcategory';
import Header from '../../../../components/marketHeader';
import { actions } from '../../../../store/location';
import styles from './styles';

const Category = ({ classes, market, category, openAside, itemsByCategories }) => {
  return (
    <>
      <Header
        market={market}
        category={category}
        title={category.name}
        image={category.picture}
      />

      <Centered
        id="Products"
        component="section"
      >
        { 
          itemsByCategories.map(subcategory => {
            return (
              <article>
                <Subcategory
                  title={subcategory.name}
                  showHeader={itemsByCategories.size > 1}
                  items={subcategory.items}
                  link={actions.goMarketCategorySubcategory({
                    marketName: market.shortcut,
                    categoryName: category.shortcut,
                    subcategoryName: subcategory.shortcut,
                  })}
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
