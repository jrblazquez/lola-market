import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Icon = ({ classes, icon, className }) => {
  return (
    <span className={`${ classes.container } ${ className}`}>
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
