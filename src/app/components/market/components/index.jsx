import React from 'react';
import injectSheet from 'react-jss';
import Centered from '../../../../components/centered';
import Subcategory from '../../../../components/subcategory';
import Header from '../../../../components/marketHeader';
import { actions } from '../../../../store/location';
import styles from './styles';

const Category = ({ classes, market, openAside, itemsByCategories }) => {
  return (
    <>
      <Header
        market={market}
        onClick={openAside}
        title={market.name}
        image={market.picture}
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
                  link={actions.goMarketCategory({ marketName: market.shortcut, categoryName: category.shortcut })}
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
