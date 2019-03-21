const HeaderStyles = theme => ({
  headerContainer: {
    color: theme.primaryColor.font,
    ...theme.font.header,
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.padding.header,
    backgroundColor: theme.primaryColor.accent,
    boxShadow: theme.shadow.header
  },
  ...theme.animation.hoverLogo.keyframes,
  headerLogoContainer: {
    cursor: 'pointer',
    height: '100%',
    '&:hover': {
      '& i': {
        animation: theme.animation.hoverLogo.animation
      }
    }
  },
  headerLogoIcon: {
    marginRight: '0.5em'
  },
  headerCopyright: {
    fontSize: '0.4em'
  },
  headerButtons: {
    height: '100%',
    '& i': {
      margin: theme.margin.headerIcon,
      transition: theme.animation.globalTransition,
      '&:hover': {
        transition: theme.animation.globalTransition,
        ...theme.animation.hoverIcon,
        cursor: 'pointer'
      }
    }
  }
})

export default HeaderStyles;