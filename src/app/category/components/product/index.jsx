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
  name: 'Aceite oliva sabor suave tapón rojo Hacendado',
  image: 'https://api.comprea.com/bundles/product/aceite-oliva-sabor-suave-tapon-rojo-de-mercadona.jpg?s=xs',
  price: '3.59',
  unit: 'ud.',
}

export default injectSheet(styles)(Product);
