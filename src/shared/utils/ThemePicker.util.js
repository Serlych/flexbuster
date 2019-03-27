import React from 'react';
import { ThemeProvider as Theme } from 'react-jss';

import LightTheme from '../themes/Light.theme';
import DarkTheme from '../themes/Dark.theme';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ThemePicker = props => {
  
  const { themeIndex, themeInput, children } = props
  
  switch (themeIndex) {
    case 0: {
      return (
        <Theme theme={LightTheme(themeInput)}>
          {children}
        </Theme>
      )
    }
    
    case 1: {
      return (
        <Theme theme={DarkTheme(themeInput)}>
          {children}
        </Theme>
      )
    }
    
    default: {
      return (
        <Theme theme={LightTheme(themeInput)}>
          {children}
        </Theme>
      )
    }
  }
}

const mapStateToProps = state => ({
  themeIndex: state.theme.themeIndex,
  themeInput: state.theme,
});
const mapDispatchToProps = () => bindActionCreators({});
const ReducedThemePicker = connect(mapStateToProps, mapDispatchToProps)(ThemePicker);

export default ReducedThemePicker;