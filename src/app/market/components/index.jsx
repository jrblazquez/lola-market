import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Market = ({ market, category }) => {
  return (
    <div>{market.name}</div>
  )
}

export default injectSheet(styles)(Market);