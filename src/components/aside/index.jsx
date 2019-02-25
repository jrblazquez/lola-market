import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';
import Section from '../section';

const Aside = ({ classes }) => (
  <nav className={classes.container}>
    <header className={classes.header}/>
    <ul className={classes.sections}>
      <Section>
          <Section />
          <Section />
          <Section />
      </Section>
      <Section>
          <Section />
          <Section />
          <Section />
      </Section>
      <Section>
          <Section />
          <Section />
          <Section />
      </Section>
    </ul>
  </nav>
);

export default injectSheet(styles)(Aside);
