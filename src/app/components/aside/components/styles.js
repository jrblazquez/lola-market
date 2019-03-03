const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.aside,
    position: 'fixed',
    width: '320px',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    left: props => props.isOpened ? '0': '-320px',
    transition: 'all ease-out 200ms',
    zIndex: 12,
  },
  categories: {
    overflowY: 'auto',
  }
});

export default styles;
