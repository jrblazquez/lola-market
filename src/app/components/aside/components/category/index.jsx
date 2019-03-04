import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import cN from 'classnames';
import styles from './styles';
import Icon from '../../../../../components/icon';
import ChevronUP from '../../../../../components/svg/chevronUp';
import Check from '../../../../../components/svg/check';

class Category extends PureComponent{
  render(){
    const {
      classes,
      id,
      name,
      hasSubcategories,
      icon,
      children,
      onClick,
      isSelected,
    } = this.props;
    return (
      <li className={classes.container}>
        <div 
          className={classes.section}
          onClick={onClick}
        >
          <Icon icon={icon} />
          <span className={classes.name}>
            { name }
          </span>
          <span className={classes.chevron}>
            { 
              hasSubcategories
                ? <ChevronUP className={cN(classes.chevronDown, {[classes.chevronUp]: isSelected})} />
                : isSelected 
                  ? <Check className={classes.check} /> 
                  : null 
            }
          </span>
        </div>
        { children }
      </li>
    );
  };
};

Category.defaultProps = {
}

export default injectSheet(styles)(Category);
