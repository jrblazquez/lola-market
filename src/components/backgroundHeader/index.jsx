import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const BackgroundHeader = ({ classes, image, title }) => {
  return (
    <header className={classes.container}>
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
