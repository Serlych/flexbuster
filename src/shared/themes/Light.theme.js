import HSLtoRGB from '../utils/hslToRgb.util';
import { rgb } from 'wcag-contrast';

//Hues
const hue = 160;
const hueOffset = 60;
const successHue = 125;
const warningHue = 55;

//Saturation
const saturation = 40;
const saturationOffset = 10;

//Lightness
let lightness = 55;
const lightnessOffset = 10;

//Colors
const primaryPrincipal = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
const primaryAccent = `hsl(${hue}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`;

const secondaryPrincipal = `hsl(${hue - hueOffset}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`;
const secondaryAccent = `hsl(${hue - hueOffset}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`;

const successPrincipal = `hsl(${successHue}, 75%, 75%)`;
const warningPrincipal = `hsl(${warningHue}, 75%, 85%)`;

const grayLightnessOffset = 40;
const grayLightnessConst = 98.5

const borderColor = `hsl(0, 0%, ${grayLightnessConst - 12}%)`;

const grayPrincipal = `hsl(0, 0%, ${grayLightnessConst}%)`;
const grayAccent = `hsl(0, 0%, ${grayLightnessConst - 9}%)`;
const grayContainer = `hsl(0, 0%, ${grayLightnessConst - 4}%)`;

//Shadow
const shadowXPosition = 3;
const shadowYPosition = 2;
const shadowBlur = 6;
const shadowOpacity = 0.4;
const shadowOpacityOffset = 0.2;
const imageShadow = `drop-shadow(${shadowXPosition}px ${shadowYPosition}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}))`;

//Font
const fontSize = 1.1;

//Animation
const animationToX = 0;
const animationToY = -5;
const animationDuration = 0.10;
const animationBezier = 'cubic-bezier(0.80, 0.10, 0.80, 0.80)';
const globalTransition =`all ${animationDuration}s ${animationBezier}`;

const dentsSize = '32px';

//Automatic font color pick
let overrideAutomaticFontColor = true;
let overriddenFontColor = 'white'

const calculateFontColor = (h, s, l) => {
  if (overrideAutomaticFontColor === false) {
    let whiteRatio = parseFloat(rgb(HSLtoRGB(h, s, l), [255, 255, 255]).toFixed(2))
    let blackRatio = parseFloat(rgb(HSLtoRGB(h, s, l), [0, 0, 0]).toFixed(2))
  
    if (lightness >= 55) {
      if (blackRatio >= 7) {
        return 'black'
      } else if (blackRatio < 7) {
        lightness += lightness / 3
        return 'black'
      }
    } else if (lightness <= 45) {
      if (whiteRatio >= 7) {
        return 'white'
      } else if (whiteRatio < 7) {
        lightness -= lightness / 2
        return 'white'
      }
    } else {
      return `hsl(${Math.abs(hue /2)}, 10%, 97%)`
    }
  }
  
  return overriddenFontColor
}

let automaticFontColor = calculateFontColor(hue, saturation, lightness);
const primaryFont = overrideAutomaticFontColor ? overriddenFontColor : automaticFontColor

const LightTheme = {
  layout: {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: `${fontSize + 1.3}em`,
      fontWeight: 700,
      color: primaryFont,
      backgroundColor: primaryAccent,
      padding: '1rem 1rem 1rem 2rem',
      boxShadow: `0 ${shadowYPosition + 3}px ${shadowBlur}px 0px rgba(0, 0, 0, ${(shadowOpacity - 0.1).toFixed(2)})`,
    },
    content: {
      fontSize: `${fontSize}em`,
      fontWeight: 400,
      backgroundColor: grayPrincipal,
      padding: '4rem 10rem'
    },
    footer: {
      fontSize: `${fontSize + 0.3}em`,
      fontWeight: 400,
      color: primaryFont,
      backgroundColor: primaryAccent,
      padding: '2rem',
      boxShadow: `0 ${shadowYPosition - 5}px ${shadowBlur}px 0px rgba(0, 0, 0, ${(shadowOpacity - 0.1).toFixed(2)})`
    }
  },
  component: {
    title: {
      fontSize: `${fontSize + 1.5}em`,
      fontWeight: 500,
    },
    subtitle: {
      display: 'inherit',
      fontSize: `${fontSize + 0.5}em`,
      fontWeight: 500,
      textAlign: 'center',
      padding: '0.6rem',
      borderBottom: `2px dashed ${borderColor}`,
      margin: '0 0 1.5rem 0',
    },
    breadcrumb: {
      fontSize: `${fontSize + 0.2}em`,
      fontWeight: 400,
      color: `hsl(0, 0%, ${grayLightnessConst - grayLightnessOffset}%)`
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: grayContainer,
      padding: '2rem',
      borderRadius: '10px',
      margin: '2.5rem 0',
      boxShadow: `${shadowXPosition}px ${shadowYPosition}px ${shadowBlur}px 0px rgba(0, 0, 0, ${shadowOpacity - shadowOpacityOffset})`,
    },
    error: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage:
        `linear-gradient(135deg, ${grayPrincipal} 50%, transparent 50%),
       linear-gradient(225deg, ${grayPrincipal} 50%, transparent 50%),
       linear-gradient(45deg, ${grayPrincipal} 50%, transparent 50%),
       linear-gradient(-45deg, ${grayPrincipal} 50%, transparent 50%)`,
      backgroundPosition:
        'top left, top left, ' +
        'bottom left, bottom left',
      backgroundSize: `${dentsSize} ${dentsSize}`,
      backgroundRepeat: 'repeat-x',
      backgroundColor: primaryPrincipal,
      padding: '7rem 2rem',
      margin: '2.5rem 0',
      '& svg': {
        filter: imageShadow
      }
    }
  },
  inputElement: {
    text: {
      width: '50%',
      padding: '0.5rem',
      border: `1px solid ${borderColor}`,
      margin: '0.5rem 0'
    },
    textArea: {
      width: '97%'
    },
    button: {
      fontSize: `${fontSize + 0.1}em`,
      backgroundColor: grayAccent,
      padding: '1rem 3rem',
      border: 'none',
      marginTop: '1rem',
      transition: globalTransition,
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        backgroundColor: grayPrincipal,
        transition: globalTransition
      }
    }
  },
  animation: {
    globalTransition: globalTransition,
    hoverIcon: {
      transition: globalTransition,
      transform: `translate(${animationToX}px, ${animationToY}px)`,
      filter: `drop-shadow(${shadowXPosition}px ${shadowYPosition}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}))`,
    },
    hoverLogo: {
      animation: 'logo 0.3s ease-in',
      keyframes: {
        '@keyframes logo': {
          '0%': {transform: 'rotate(-15deg)'},
          '25%': {transform: 'rotate(35deg)'},
          '50%': {transform: 'rotate(-15deg)'},
          '75%': {transform: 'rotate(15deg)'},
          '100%': {transform: 'rotate(0deg)'}
        }
      }
    }
  }
}

export default LightTheme;