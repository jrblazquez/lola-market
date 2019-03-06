import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Product = ({ classes, name, image, price, unit }) => {
  return (
    <a className={classes.container}>
      <figure className={classes.imageContainer}>
        <img
          className={classes.image}
          src={image}
        />
      </figure>
      <p className={classes.name}>{name}</p>
      <p className={classes.price}>
        <span className={classes.number}>{price} </span>
        <span className={classes.unit}>/ {unit}</span>
      </p>
    </a>
  );
}

Product.defaultProps = {
  name: '',
  image: '',
  price: '',
  unit: '',
}

export default injectSheet(styles)(Product);
