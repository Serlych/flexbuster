const PageTitleStyles = theme => ({
  pageTitleContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  pageTitle: {
    ...theme.component.title,
  },
  pagePath: {
    ...theme.component.breadcrumb
  }
})

export default PageTitleStyles;