import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Centered = ({ classes, children, id, component: Component }) => {
  return (
    <Component
      id={id}
      className={classes.container}
    >
      { children }
    </Component>
  );
}

Centered.defaultProps = {
  component: 'section'
}

export default injectSheet(styles)(Centered);
