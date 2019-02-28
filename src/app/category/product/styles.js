
const styles = theme => ({
  container: {
    backgroundColor: '#FFFFFF',
    padding: '0.75rem',
    margin: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e2e2e2',
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${theme.palette.primary}`,
    },
    borderRadius: '2px',
  },
  name: {
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  imageContainer: {
    height: '8rem',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  price: {
    color: '#9a9a9a',
  },
  number: {
    color: theme.palette.primary,
    fontWeight: 500,
  }
});

export default styles;
