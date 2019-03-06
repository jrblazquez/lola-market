const styles = theme => ({
  container: {
    flex: '0 0 4rem',
    backgroundColor: theme.palette.primary,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.md]: {
      flex: '0 0 5rem',
    },
  },
  info: {
    padding: '12px 0',
    color: 'white',
    flexGrow: 1,
  },
  name:{
    fontWeight: 600,
    fontSize: '18px',
  },
  postalcode:{
    fontSize: '14px',
  },
  button: {
    margin: '12px',
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: '#ffffff',
    /* text-transform: uppercase', */
    fontWeight: '600',
    borderRadius: '25px',
    fontSize: '12px',
    outline: 'none',
    transition: 'all ease-in 200ms',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary,
    },
  }
});

export default styles;
