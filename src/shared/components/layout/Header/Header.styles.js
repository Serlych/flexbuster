const HeaderStyles = theme => ({
  headerContainer: {
    ...theme.layout.header,
    position: 'relative',
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
      margin: '0 1rem',
      transition: theme.animation.globalTransition,
      '&:hover': {
        cursor: 'pointer',
        ...theme.animation.hoverIcon,
      }
    }
  }
})

export default HeaderStyles;