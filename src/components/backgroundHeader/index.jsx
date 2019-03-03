import React from 'react';
import injectSheet from 'react-jss';
import Icon from '../icon';
import styles from './styles';

const BackgroundHeader = ({ classes, image, title, onClick, icon }) => {
  return (
    <header
      className={classes.container}
      onClick={onClick}
    >
      <Icon
        size="large"
        icon={icon}
        className={classes.icon}
      />
      <h1 className={classes.title}>
        { title }
      </h1>
    </header>
  );
}

BackgroundHeader.defaultProps = {
  image: 'https://api.comprea.com/bundles/asset/category/bg_header_008.jpg?s=web',
  title: 'Aceites, salsas y condimentos',
}

export default injectSheet(styles)(BackgroundHeader);
