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
    height: '100%',
    '& i': {
      transition: theme.animation.transition,
      '&:hover': {
        transition: theme.animation.transition,
        ...theme.animation.hover,
        cursor: 'pointer'
      }
    }
  }
})

export default HeaderStyles;