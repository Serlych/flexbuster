import React, { Fragment } from 'react';
import { func, object } from 'prop-types';
import { HuePicker } from 'react-color';
import injectSheet from 'react-jss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle.component';

import { changeHue, changeSaturation, changeLightness, changeAutoFontColor, changeFontColor, changeVisibleShadows, changeColoredShadows } from '../../redux/actions/theme.action';

import StylerStyles from './Styler.styles';

const StylerComponent = props => {
  
  const {
    location,
    changeHue, changeSaturation, changeLightness,
    changeAutoFontColor, changeFontColor,
    changeVisibleShadows, changeColoredShadows,
    currentHue, currentSaturation, currentLightness,
    currentAutoFontColor, currentFontColor,
    currentVisibleShadows, currentColoredShadows,
    classes } = props
  
  const handleChangeComplete = color => {
    changeHue(color.hsl.h)
  }
  
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'saturation') changeSaturation(parseInt(value))
    else if (name === 'lightness') changeLightness(parseInt(value))
    else if (name === 'autoFontColor') changeAutoFontColor()
    else if (name === 'fontColor') changeFontColor(value)
    else if (name === 'visibleShadows') changeVisibleShadows()
    else if (name === 'coloredShadows') changeColoredShadows()
  }

  return (
    <Fragment>
      <PageTitle pageTitleText='Style Editor' pageTitlePath={location.pathname} />
      <div className={classes.stylerContainer}>
        <div className={classes.stylerPicker}>
          <p className={classes.stylerPickerTitle}>Hue</p>
          <HuePicker color={{ h: currentHue, s: currentSaturation, l: currentLightness}} onChange={handleChangeComplete} />
        </div>
        <div className={classes.stylerPicker}>
          <p className={classes.stylerPickerTitle}>Saturation</p>
          <input className={classes.stylerTextInput} type='number' name='saturation' min='0' max='100' defaultValue={currentSaturation} onChange={handleChange} />
        </div>
        <div className={classes.stylerPicker}>
          <p className={classes.stylerPickerTitle}>Lightness</p>
          <input className={classes.stylerTextInput} type='number' name='lightness' min='0' max='100' defaultValue={currentLightness} onChange={handleChange} />
        </div>
        <div className={classes.stylerPicker}>
          <p className={classes.stylerPickerTitle}>Font Color</p>
          <div className={classes.stylerFontColor}>
            <span className={currentAutoFontColor ? null : classes.stylerCrossed}>
              <input className={classes.stylerSelectors} type='checkbox' name='autoFontColor' checked={currentAutoFontColor} onChange={handleChange} />
              Automatic Font Color
            </span>
            <span className={currentAutoFontColor ? classes.stylerMuted : null}>
              <input className={classes.stylerSelectors} type='radio' name='fontColor' value='white' checked={currentFontColor === 'white'} onChange={handleChange} disabled={currentAutoFontColor} />
              White
            </span>
            <span className={currentAutoFontColor ? classes.stylerMuted : null}>
              <input className={classes.stylerSelectors} type='radio' name='fontColor' value='black' checked={currentFontColor === 'black'} onChange={handleChange} disabled={currentAutoFontColor} />
              Black
            </span>
          </div>
        </div>
        <div className={classes.stylerPicker}>
          <p className={classes.stylerPickerTitle}>Shadows</p>
          <span className={currentVisibleShadows ? null : classes.stylerCrossed}>
            <input className={classes.stylerSelectors} type='checkbox' name='visibleShadows' checked={currentVisibleShadows} onChange={handleChange} />
            Visible shadows
          </span>
          <span className={currentColoredShadows ? null : classes.stylerCrossed}>
            <input className={classes.stylerSelectors} type='checkbox' name='coloredShadows' checked={currentColoredShadows} onChange={handleChange} />
            Colored shadows
          </span>
        </div>
      </div>
    </Fragment>
  )
}

StylerComponent.propTypes = {
  changeHue: func.isRequired,
  location: object.isRequired,
  classes: object.isRequired
}

const StyledStyler = injectSheet(StylerStyles)(StylerComponent);

const mapStateToProps = state => ({
  currentHue: state.theme.color.hue,
  currentSaturation: state.theme.color.saturation,
  currentLightness: state.theme.color.lightness,
  currentAutoFontColor: state.theme.color.autoFontColor,
  currentFontColor: state.theme.color.fontColor,
  currentVisibleShadows: state.theme.shadows.visible,
  currentColoredShadows: state.theme.shadows.colored
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changeHue, changeSaturation, changeLightness,
  changeAutoFontColor, changeFontColor,
  changeVisibleShadows, changeColoredShadows
}, dispatch);
const ReducedStyler = connect(mapStateToProps, mapDispatchToProps)(StyledStyler);

export default ReducedStyler;