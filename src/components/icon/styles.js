const styles = theme => ({
  container: {
    padding: '12px',
  },
  icon: {
    minHeight: props => props.size === 'large' ? '60px' : '32px',
    width: props => props.size === 'large' ? '60px' : '32px',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
});

export default styles;
