const HeaderStyles = theme => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.padding.header,
    backgroundColor: theme.primaryColor.main,
    boxShadow: theme.shadow.header
  },
  headerLogo: {
    fontSize: theme.font.size.logo,
    height: '100%'
  },
  headerButtons: {
    height: '100%'
  }
})

export default HeaderStyles;