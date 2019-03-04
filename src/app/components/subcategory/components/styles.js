const styles = theme => ({
  headerIcons: {
    display: 'flex',
  },
  headersIconsSeparation: {
    border: '1px solid white',
  },
  title: {
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '1.2',
    margin: '0rem',
    textAlign: 'center',
    [theme.breakpoints.md]: {
      fontSize: '2rem',
    },
    minHeight: '3rem',
  },
});

export default styles;
