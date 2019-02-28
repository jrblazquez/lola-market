import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Icon = ({ classes, icon }) => {
  return (
    <span className={classes.container} >
      <div
        style={{ backgroundImage: icon && `url(${icon})` }}
        className={classes.icon}
      />
    </span>
  );
}

Icon.defaultProps = {
  icon: '',
}

export default injectSheet(styles)(Icon);
