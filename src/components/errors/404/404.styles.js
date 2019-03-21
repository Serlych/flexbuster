const Error404Styles = theme => ({
  errorWrapper: {
    ...theme.flexCenter,
    ...theme.sharkBorder,
    backgroundColor: theme.primaryColor.principal,
    margin: theme.margin.container,
    padding: theme.padding.container
  },
  errorImage: {
    filter: theme.shadow.image
  },
  errorName: {
    ...theme.font.title,
    margin: '2% 0'
  },
  errorEmphasis: {
    fontWeight: 600,
    fontSize: '1.5em'
  },
  errorBody: {
    ...theme.font.subtitle,
    color: 'hsv(184, 28%, 96%)'
  }
})

export default Error404Styles;