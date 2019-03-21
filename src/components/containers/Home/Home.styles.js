const HomeStyles = theme => ({
  homeContainer: {
    color: theme.primaryColor.font,
    ...theme.font.content,
    backgroundColor: theme.primaryColor.principal,
    padding: theme.padding.container,
    boxShadow: theme.shadow.container,
    borderRadius: theme.borderRadius.container
  }
})

export default HomeStyles;