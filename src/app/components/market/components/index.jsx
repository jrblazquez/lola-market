import React from 'react';
import injectSheet from 'react-jss';
import Header from '../../../../components/backgroundHeader';
import Centered from '../../../../components/centered';
import Subcategory from '../../../../components/subcategory';
import Icon from '../../../../components/icon';
import styles from './styles';

const Category = ({ classes, market, openAside, itemsByCategories }) => {
  return (
    <>
      <Header 
        image={market.picture}
        onClick={openAside}
      >
        <nav className={classes.headerIcons}>
          <Icon
            size="large"
            icon={market.icon}
          />
        </nav>
        <h1 className={classes.title}>
          { market.name }
        </h1>
      </Header>

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
