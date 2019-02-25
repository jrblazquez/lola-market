const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 12px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
    '&:active': {
      backgroundColor: '#dcf6da',
    }
  },
  icon: {
    backgroundImage: props => `url(${props.icon})`,
    minHeight: '32px',
    width: '32px',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //flex: '1 0 auto',
  },
  name: {
    flex: '1',
    fontSize: '25px',
    lineHeight: '1.2em',
    //font-family: adelle,Sans-serif;
    color: '#9a9a9a',
    fontWeight: '400',
    padding: '12px',
  },
  chevron: {
    border: props => props.isExpanded ? '1px solid blue' : '1px solid red',
    minHeight: '32px',
    width: '32px',
    marginLeft: '12px',
  },
  subsections: {
    border: props => props.isExpanded ? '1px solid blue' : '1px solid red',
    flex: '1 0 100%',
    margin: '0 -12px',
  },
});

export default styles;
