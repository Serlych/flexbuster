const Error404Styles = theme => ({
  errorWrapper: {
    ...theme.flexCenter,
    ...theme.sharkBorder,
    backgroundColor: theme.secondaryColor.main,
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
  errorBody: {
    ...theme.font.subtitle,
    color: 'hsv(184, 28%, 96%)'
  }
})

export default Error404Styles;