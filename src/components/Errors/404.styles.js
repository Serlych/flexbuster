const Error404Styles = theme => ({
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    margin: '5%',
    padding: '3% 0'
  },
  errorName: {
    margin: '2% 0',
    fontSize: '5vw'
  },
  errorText: {
    textAlign: 'center'
  }
})

export default Error404Styles;