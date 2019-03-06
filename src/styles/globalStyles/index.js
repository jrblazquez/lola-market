const globalStyles = theme => ({
  html: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    backgroundColor: theme.palette.background.default,
    '@media print': {
      backgroundColor: theme.palette.common.white,
    },
    font: '16px/1.35em Helvetica Neue,Sans-serif,Helvetica,Arial',
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: 'none',
  },
  p: {
    margin: 0,
  },
  button: {
    cursor: 'pointer',
  }
});

export default globalStyles;
