const HeaderStyles = theme => ({
  headerContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gridTemplateAreas: "'header-title header-buttons'"
  },
  headerTitle: {
    gridArea: 'header-title',
    justifySelf: 'start',
    alignSelf: 'center',
    padding: '50px',
    backgroundColor: theme.primaryColor
  },
  headerButtons: {
    gridArea: 'header-buttons',
    justifySelf: 'end',
    alignSelf: 'center',
    padding: '50px',
    backgroundColor: theme.secondaryColor
  }
})

export default HeaderStyles;