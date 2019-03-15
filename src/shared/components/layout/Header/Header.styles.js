const HeaderStyles = theme => ({
  headerContainer: {
    ...theme.font.header,
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.padding.header,
    backgroundColor: theme.primaryColor.accent,
    boxShadow: theme.shadow.header
  },
  headerLogoContainer: {
    cursor: 'pointer',
    height: '100%'
  },
  headerLogoIcon: {
    marginRight: '0.5em'
  },
  headerButtons: {
    height: '100%'
  }
})

export default HeaderStyles;