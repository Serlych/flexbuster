const PageTitleStyles = theme => ({
  pageTitleContainer: {
    marginBottom: theme.margin.title,
    display: 'flex',
    flexDirection: 'column'
  },
  pageTitle: {
    ...theme.font.title,
    textAlign: 'left'
  },
  pagePath: {
    ...theme.font.breadcrumb
  }
})

export default PageTitleStyles;