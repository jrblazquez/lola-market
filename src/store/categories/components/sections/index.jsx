import React from 'react';
import injectSheet from 'react-jss';
import cs from 'classnames';
import Section from '../section';
import styles from './styles';

const Sections = ({ className, classes, sections, expand, collapse, select }) => (
  <ul className={cs(classes.sections, className)}>
    { 
      sections.map(section => (
        <Section
          key={section.id}
          { ...section }
          expand={expand}
          collapse={collapse}
          select={select}
        />
      ))
    }
  </ul>
);

Sections.defaultProps = {
  sections: [],
}

export default injectSheet(styles)(Sections);
