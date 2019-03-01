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
    height: '248px',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    color: 'white',
  },
});

export default styles;
