const styles = theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    flexDirection: 'column',
    height: '4rem',
    position: 'relative',
    [theme.breakpoints.md]: {
      height: '5rem',
    },
    transition: 'all ease 250ms',
    position: 'fixed',
    width: '100%',
    zIndex: 5,
    borderBottom: '1px solid #d8d8d8',
  },
  logo: {
    height: '100%',
    padding: '0.5rem',
    width: 'auto',
  },
});

export default styles;
