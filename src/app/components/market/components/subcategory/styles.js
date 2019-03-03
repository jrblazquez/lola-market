const styles = theme => ({
  container: {
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '0rem 0.25rem',
  },
  title: {
    color: theme.palette.primary,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
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
    justifyContent: 'space-between',
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
