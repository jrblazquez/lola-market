const styles = theme => ({
  container: {
    cursor: 'pointer',
  },
  section: {
    display: 'flex',
    cursor: 'pointer',
    color: 'transparent',
    '&:hover': {
      backgroundColor: '#efefef',
      color: '#9A9A9A',
    },
    '&:active': {
      backgroundColor: '#dcf6da',
    }
  },
  iconContainer: {
    padding: '12px',
  },
  icon: {
    backgroundImage: props => props.icon ? `url(${props.icon})`: '',
    minHeight: '32px',
    width: '32px',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //flex: '1 0 auto',
  },
  name: {
    flex: '1',
    fontSize: '18px',
    lineHeight: '1.2em',
    //font-family: adelle,Sans-serif;
    color: '#9a9a9a',
    fontWeight: '400',
    padding: '12px 0',
    borderBottom: '1px solid #9A9A9A',
    lineHeight: '32px',
  },
  chevron: {
    //border: props => props.isExpanded ? '1px solid blue' : '1px solid red',
    padding: '12px',
    borderBottom: '1px solid #9A9A9A',
    display: 'flex',
    alignItems: 'center',
    transition: 'all ease 200ms',
  },
  chevronDown: {
    transition: 'all ease 200ms',
    transform: 'rotate(180deg)',
  },
  chevronUp: {
    transform: 'rotate(0deg)',
    color: '#9A9A9A',
  },
  check: {
    color: theme.palette.primary,
  },
  sections: {
    maxHeight: 0,
    transition: 'max-height ease-in-out 200ms', //TODO: CSSTranstionGroup to rescue
  },
  sectionExpanded: {
    maxHeight: '100vh',
    backgroundColor: '#f7f7f7',
  },
});

export default styles;
