import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../icon';
import styles from './styles';

const BackgroundHeader = ({ classes, image, onClick, children }) => {
  return (
    <header
      className={classes.container}
      onClick={onClick}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      { children }
    </header>
  );
}

BackgroundHeader.defaultProps = {
  image: '',
  title: '',
}

export default injectSheet(styles)(BackgroundHeader);
