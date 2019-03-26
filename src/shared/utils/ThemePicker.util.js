import React from 'react';
import { ThemeProvider as Theme } from 'react-jss';

import LightTheme from '../themes/Light.theme';
import DarkTheme from '../themes/Dark.theme';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ThemePicker = props => {
  
  const { themeIndex, colorInput, children } = props
  
  switch (themeIndex) {
    case 0: {
      return (
        <Theme theme={LightTheme(colorInput)}>
          {children}
        </Theme>
      )
    }
    
    case 1: {
      return (
        <Theme theme={DarkTheme(colorInput)}>
          {children}
        </Theme>
      )
    }
    
    default: {
      return (
        <Theme theme={LightTheme(colorInput)}>
          {children}
        </Theme>
      )
    }
  }
}

const mapStateToProps = state => ({
  themeIndex: state.theme.themeIndex,
  colorInput: state.theme.color
});
const mapDispatchToProps = () => bindActionCreators({});
const ReducedThemePicker = connect(mapStateToProps, mapDispatchToProps)(ThemePicker);

export default ReducedThemePicker;