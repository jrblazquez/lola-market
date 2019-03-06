const styles = theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height: '12rem',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.md]: {
      height: '17rem',
    },
    transition: 'all ease 250ms',
    '&>*':{
      zIndex: 4,
      marginTop: '4rem',
      [theme.breakpoints.md]: {
        marginTop: '5rem',
      },
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 80%)',
      zIndex: 3,
    },
  },
});

export default styles;
