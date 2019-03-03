import React from 'react';
import injectSheet from 'react-jss';
import cs from 'classnames';
import Category from '../category';
import styles from './styles';

const Categories = ({ className, classes, categories, expand, collapse, select, categoriesSelected }) => (
  <ul className={cs(classes.categories, className)}>
    { 
      categories.map(category => {
        return (
          <Category
            icon={category.hasSubcategories ? category.icon : null}
            id={category.id}
            isSelected={category.isSelected}
            key={category.id}
            name={category.name}
            parents={category.parents}
            hasSubcategories={category.hasSubcategories}
            onClick={
              category.hasSubcategories
              ? 
                category.isSelected
                ? collapse
                : expand
              : select
            }
          >
            { 
              category.categories ? (
                <Categories
                  categories={category.categories}
                  categoriesSelected={categoriesSelected}
                  classes={classes}
                  className={classes.categories}
                  collapse={collapse}
                  expand={expand}
                  select={select}
                />
              ) : null
            }
          </Category>
        )
      })
    }
  </ul>
);

Categories.defaultProps = {
  categories: [],
  level: 0,
}

export default injectSheet(styles)(Categories);
