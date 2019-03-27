const StylerStyles = theme => ({
  stylerContainer: {
    ...theme.component.container,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  stylerPicker: {
    ...theme.inputElement.styleInput
  },
  stylerPickerTitle: {
    ...theme.component.subtitle,
    margin: '0 0 2rem 0',
    padding: '0 0.6rem 0.6rem 0.6rem'
  },
  stylerTextInput: {
    ...theme.inputElement.text,
    fontSize: '1.2em',
  },
  stylerFontColor: {
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      margin: '0.2rem 0',
    }
  },
  stylerMuted: {
    ...theme.component.mutedContent
  },
  stylerCrossed: {
    textDecoration: 'line-through'
  },
  stylerSelectors: {
    marginRight: '10px',
    width: 'auto'
  }
})

export default StylerStyles;