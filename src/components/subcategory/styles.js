const styles = theme => ({
  container: {
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0.25rem 1rem 0.25rem',
  },
  icon:{
    padding: '0 0.5rem 0 0',
  },
  title: {
    color: theme.palette.primary,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    lineHeight: 1.2,
  },
  link: {
    backgroundColor: theme.palette.primary,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '23px',
    padding: '0.25rem 0.75rem',
    fontWeight: '600',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.sm]:{
      marginBottom: '1rem',
    },
  },
  product: {
    display: 'flex',
    flex: '0 0 100%',
    [theme.breakpoints.xxs]:{
      flex: '0 0 50%',
    },
    [theme.breakpoints.xs]:{
      flex: '0 0 33%',
    },
    [theme.breakpoints.sm]:{
      flex: '0 0 33%',
    },
    [theme.breakpoints.md]:{
      flex: '0 0 16.6%',
    },
    [theme.breakpoints.lg]:{
      flex: '0 0 16.6%',
    },
  },
});

export default styles;
