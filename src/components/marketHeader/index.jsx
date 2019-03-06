import React from 'react';
import injectSheet from 'react-jss';
import Link from 'redux-first-router-link';
import Header from '../backgroundHeader';
import Icon from '../icon';
import styles from './styles';
import { actions } from 'store/location';

const MarketHeader = ({ classes, market, category, onClick, title, image }) => (
  <Header 
    image={image}
    onClick={onClick}
  >
    <nav className={classes.headerIcons}>
      <Link to={actions.goMarket({ marketName: market.shortcut })}>
        <Icon
          size="large"
          icon={market.icon}
        />
      </Link>
      {
        category ? ([
          <hr className={classes.headersIconsSeparation} />,
          <Link to={actions.goMarketCategory({ marketName: market.shortcut, categoryName: category.shortcut })}>
            <Icon
              size="large"
              icon={category.icon}
            />
          </Link>
        ]): null
      }
    </nav>
    <h1 className={classes.title}>
      { title }
    </h1>
  </Header>
)

export default injectSheet(styles)(MarketHeader);
