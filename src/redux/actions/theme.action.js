import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHTNESS, CHANGE_AUTO_FONT_COLOR, CHANGE_FONT_COLOR, CHANGE_VISIBLE_SHADOWS, CHANGE_COLORED_SHADOWS } from './types/theme.types';

export const changeHue = hue => dispatch => {
  dispatch ({
    type: CHANGE_HUE,
    payload: hue
  })
}

export const changeSaturation = saturation => dispatch => {
  dispatch ({
    type: CHANGE_SATURATION,
    payload: saturation
  })
}

export const changeLightness = lightness => dispatch => {
  dispatch ({
    type: CHANGE_LIGHTNESS,
    payload: lightness
  })
}

export const changeAutoFontColor = () => dispatch => {
  dispatch ({
    type: CHANGE_AUTO_FONT_COLOR
  })
}

export const changeFontColor = color => dispatch => {
  dispatch ({
    type: CHANGE_FONT_COLOR,
    payload: color
  })
}

export const changeVisibleShadows = () => dispatch => {
  dispatch ({
    type: CHANGE_VISIBLE_SHADOWS
  })
}

export const changeColoredShadows = () => dispatch => {
  dispatch ({
    type: CHANGE_COLORED_SHADOWS
  })
}