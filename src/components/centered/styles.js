const styles = theme => ({
  container: {
    marginTop: '0.75rem',
    padding: '0 0.5rem',
    maxWidth: '1000px',
    alignSelf: 'center',
    width: '100%',
    [theme.breakpoints.md]:{
      flex: '0 0 33%',
      marginTop: '1rem',
      padding: '0 1rem',
    }
  },
  title: {
    color: 'white',
  },
});

export default styles;
