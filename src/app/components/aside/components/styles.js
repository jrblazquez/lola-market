const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.aside,
    position: 'fixed',
    width: '300px',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    left: props => props.isOpened ? '0': '-320px',
    transition: 'all ease-out 200ms',
    zIndex: 12,
    [theme.breakpoints.md]:{
      width: '320px',
    }
    
  },
  categories: {
    overflowY: 'auto',
  }
});

export default styles;
