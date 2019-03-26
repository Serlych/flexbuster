import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHTNESS } from './types/theme.types';

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