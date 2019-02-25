import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Section = ({ children, classes, name }) => (
  <li className={classes.container}>
    <span className={classes.icon} />
    <span className={classes.name}>
      { name }
    </span>
    { 
      children ? (
        <>
          <span className={classes.chevron} />
          <ul className={classes.subsections}>{ children }</ul>
        </>
       ) : null
    }
  </li>
);

Section.defaultProps = {
  icon: 'https://lolamarket.com/store/views/categories/gphx/ic_category_000.png',
  name: 'Aceites, salsas y condimentos',
  isExpanded: false,
  isSubsection: false,
}

export default injectSheet(styles)(Section);
