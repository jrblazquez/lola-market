const styles = theme => ({
  container: {
    alignItems: 'center',
    backgroundImage: props => `
      linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.6) 80%), 
      url(${props.image})
    `,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '7rem',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.lg]: {
      height: '12rem',
    },
  },
  title: {
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '1.2',
    margin: '1rem',
    textAlign: 'center',
    [theme.breakpoints.lg]: {
      fontSize: '2rem',
    },
  },
});

export default styles;
