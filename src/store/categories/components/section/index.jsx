import React from 'react';
import injectSheet from 'react-jss';
import cN from 'classnames';
import Sections from '../sections';
import styles from './styles';
import ChevronUP from '../chevronUp';
import Check from '../check';

const Section = ({ id, classes, name, sections, expand, collapse, select, isSelected, isExpanded }) => (
  <li className={classes.container}>
    <div 
      className={classes.section}
      onClick={ () => {
        if(sections) return isExpanded ? collapse(id) : expand(id)
        else return isSelected ? null : select(id)
      }}
    >
      <span className={classes.iconContainer} >
        <div className={classes.icon} />
      </span>
      <span className={classes.name}>
        { name }
      </span>
      <span className={classes.chevron}>
        { sections ? <ChevronUP className={cN(classes.chevronDown, {[classes.chevronUp]: isExpanded})} /> : null }
        { isSelected ? <Check className={classes.check} /> : null }
      </span>
    </div>
    { 
      sections ? (
        <Sections
          className={cN(classes.sections, {[classes.sectionExpanded]: isExpanded})}
          sections={sections}
          expand={expand}
          collapse={collapse}
          select={select}
        />
      ) : null
    }
  </li>
);

Section.defaultProps = {
  icon: null,
  name: '',
  isExpanded: false,
  isSubsection: false,
}

export default injectSheet(styles)(Section);
