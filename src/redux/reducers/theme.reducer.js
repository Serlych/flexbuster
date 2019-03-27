import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHTNESS, CHANGE_AUTO_FONT_COLOR, CHANGE_FONT_COLOR, CHANGE_VISIBLE_SHADOWS, CHANGE_COLORED_SHADOWS } from '../actions/types/theme.types';

const initialState = {
  themeIndex: 0,
  color: {
    hue: 160,
    saturation: 40,
    lightness: 55,
    autoFontColor: false,
    fontColor: 'white'
  },
  shadows: {
    visible: true,
    colored: false
  }
}

const ThemeReducer = (prevState = initialState, action) => {
  
  switch (action.type) {
    
    case CHANGE_HUE: {
      return {
        ...prevState,
        color: {
          ...prevState.color,
          hue: action.payload
        }
      }
    }
    
    case CHANGE_SATURATION: {
      return {
        ...prevState,
        color: {
          ...prevState.color,
          saturation: action.payload
        }
      }
    }
    
    case CHANGE_LIGHTNESS: {
      return {
        ...prevState,
        color: {
          ...prevState.color,
          lightness: action.payload
        }
      }
    }
    
    case CHANGE_AUTO_FONT_COLOR: {
      return {
        ...prevState,
        color: {
          ...prevState.color,
          autoFontColor: !prevState.color.autoFontColor
        }
      }
    }
    
    case CHANGE_FONT_COLOR: {
      return {
        ...prevState,
        color: {
          ...prevState.color,
          fontColor: action.payload
        }
      }
    }
    
    case CHANGE_VISIBLE_SHADOWS: {
      return {
        ...prevState,
        shadows: {
          ...prevState.shadows,
          visible: !prevState.shadows.visible
        }
      }
    }
    
    case CHANGE_COLORED_SHADOWS: {
      return {
        ...prevState,
        shadows: {
          ...prevState.shadows,
          colored: !prevState.shadows.colored
        }
      }
    }
    
    default: {
      return prevState
    }
  }
}

export default ThemeReducer;