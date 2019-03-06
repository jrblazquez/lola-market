const styles = theme => ({
  headerIcons: {
    display: 'flex',
  },
  headersIconsSeparation: {
    border: '1px solid white',
  },
  title: {
    color: 'white',
    lineHeight: '1.2',
    margin: '0 1rem',
    textAlign: 'center',
    fontSize: '1.3rem',
    [theme.breakpoints.xs]:{
      fontSize: '1.5rem',
    },
    [theme.breakpoints.md]: {
      fontSize: '2rem',
    },
    minHeight: '3rem',
    
  }
});

export default styles;
