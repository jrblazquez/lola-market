import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const Overlay = ({ classes, onClick, isOpened }) => (
  <div
    className={classNames({
      [classes.opened]: isOpened,
      [classes.closed]: !isOpened,
    })}
    onClick={ onClick }
  />
);

Overlay.defaultProps = {
  isOpened: false,
};

export default injectSheet(styles)(Overlay);
