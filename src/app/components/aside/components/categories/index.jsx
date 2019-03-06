import React from 'react';
import injectSheet from 'react-jss';
import cs from 'classnames';
import Category from '../category';
import styles from './styles';

const Categories = ({ className, classes, categories, expand, collapse, select, categoryExpanded, categorySelected }) => (
  <ul className={cs(classes.categories, className)}>
    { 
      categories.map(category => {
        const hasSubcategories = category.categories.size > 0;
        const isSelected = (hasSubcategories ? categoryExpanded : categorySelected) === category.id;
        const onClick = hasSubcategories 
          ? (isSelected ? () => collapse(category.id) : () => expand(category.id)) 
          : (isSelected ? () => null : () => select(category.shortcut)) ;
        return (
          <Category
            icon={hasSubcategories ? category.icon : null}
            id={category.id}
            isSelected={isSelected}
            hasSubcategories={hasSubcategories}
            key={category.id}
            name={category.name}
            onClick={onClick}
          >
            { 
              hasSubcategories && isSelected ? (
                <Categories
                  categories={category.categories}
                  classes={classes}
                  className={classes.categories}
                  collapse={collapse}
                  expand={expand}
                  select={select}
                  categoryExpanded={categoryExpanded}
                  categorySelected={categorySelected}
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
