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
    flexDirection: 'column',
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
    margin: '0rem',
    textAlign: 'center',
    [theme.breakpoints.lg]: {
      fontSize: '2rem',
    },
  },
  icon: {
    padding: 0,
  }
});

export default styles;
