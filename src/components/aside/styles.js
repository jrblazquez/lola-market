const styles = theme => ({
  container: {
    backgroundColor: theme.palette.background.aside,
    position: 'fixed',
    width: '320px',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: '0 0 70px',
    backgroundColor: theme.palette.primary,
  },
  sections: {
    flexGrow: 1,
    overflowY: 'auto',
  },
});

export default styles;
