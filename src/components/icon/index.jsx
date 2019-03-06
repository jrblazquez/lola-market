import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Icon = ({ classes, icon, className }) => {
  return (
    <div className={`${ classes.container } ${ className}`}>
      <div
        style={{ backgroundImage: icon && `url(${icon})` }}
        className={classes.icon}
      />
    </div>
  );
}

Icon.defaultProps = {
  icon: '',
}

export default injectSheet(styles)(Icon);
