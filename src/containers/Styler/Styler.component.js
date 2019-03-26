import React, { Fragment } from 'react';
import { func, object } from 'prop-types';
import { HuePicker } from 'react-color';
import injectSheet from 'react-jss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle.component';

import { changeHue } from '../../redux/actions/theme.action';

import StylerStyles from './Styler.styles';

const StylerComponent = props => {
  
  const { changeHue, location, currentHue, currentSaturation, currentLightness, classes } = props
  
  const handleChangeComplete = color => {
    changeHue(color.hsl.h)
  }

  return (
    <Fragment>
      <PageTitle pageTitleText='Styler' pageTitlePath={location.pathname}/>
      <div className={classes.stylerContainer}>
        <div className={classes.stylerPicker}>
          <HuePicker color={{ h: currentHue, s: currentSaturation, l: currentLightness}} onChange={handleChangeComplete}/>
          <span>Pick the Hue</span>
        </div>
        <div className={classes.stylerPickerContainer}>
          <div className={classes.stylerPicker}>
          </div>
          <div className={classes.stylerPicker}>
          
          </div>
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
  currentLightness: state.theme.color.lightness
});
const mapDispatchToProps = dispatch => bindActionCreators({ changeHue }, dispatch);
const ReducedStyler = connect(mapStateToProps, mapDispatchToProps)(StyledStyler);

export default ReducedStyler;