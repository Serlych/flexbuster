import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHTNESS } from '../actions/types/theme.types';

const initialState = {
  themeIndex: 0,
  color: {
    hue: 160,
    saturation: 40,
    lightness: 55
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
    
    default: {
      return prevState
    }
  }
}

export default ThemeReducer;