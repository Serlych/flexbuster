const StylerStyles = theme => ({
  stylerContainer: {
    ...theme.component.container
  },
  stylerPickerContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  stylerPicker: {
    ...theme.inputElement.styleInput
  }
})

export default StylerStyles;