const styles = theme => ({
  opened: {
    backgroundColor: theme.palette.background.overlay,
    height: '100%',
    width: '100%',
    transition: 'all ease 500ms',
    position: 'fixed',
    zIndex: 11,
  },
  closed: {
    height: '100%',
    width: '100%',
    opacity: 0,
    zIndex: -1,
    position: 'fixed',
    transition: 'all ease 500ms',
  }
});

export default styles;
