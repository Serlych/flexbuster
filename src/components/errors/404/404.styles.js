const Error404Styles = theme => ({
  errorWrapper: {
    ...theme.component.error
  },
  errorName: {
    ...theme.component.title,
    margin: '2% 0'
  },
  errorEmphasis: {
    fontWeight: 600,
    fontSize: '1.5em'
  },
  errorBody: {
    textAlign: 'center',
    fontSize: '1.3em'
  }
})

export default Error404Styles;