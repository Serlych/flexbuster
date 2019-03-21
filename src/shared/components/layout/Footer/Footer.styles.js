const FooterStyles = theme => ({
  footerContainer: {
    color: theme.primaryColor.font,
    ...theme.font.footer,
    backgroundColor: theme.primaryColor.accent,
    padding: theme.padding.footer,
    boxShadow: theme.shadow.footer
  }
})

export default FooterStyles;