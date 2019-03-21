import HSLtoRGB from '../utils/hslToRgb.util';
import { rgb } from 'wcag-contrast';

const hue = 160;
const successHue = 125;
const warningHue = 45;

const saturation = 40;
let lightness = 55;

const hueOffset = 60;
const saturationOffset = 10;
const lightnessOffset = 10;

const shadowXPosition = 3;
const shadowYPosition = 2;
const shadowBlur = 6;
const shadowOpacity = 0.4;

const fontSize = 1;

const animationToX = 0;
const animationToY = -5;
const animationDuration = 0.15;
const animationBezier = 'cubic-bezier(0.80, 0.10, 0.80, 0.80)';

const backgroundColorConstant = 252;
const bgConstantOffset = 100;
const backgroundColor = `rgb(${backgroundColorConstant}, ${backgroundColorConstant}, ${backgroundColorConstant})`
const dentsSize = '32px';

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

const LightTheme = {
  primaryColor: {
    principal: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    accent: `hsl(${hue}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`,
    font: overrideAutomaticFontColor ? overriddenFontColor : automaticFontColor
  },
  secondaryColor: {
    principal: `hsl(${hue - hueOffset}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`,
    accent: `hsl(${hue - hueOffset}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`,
    font: overrideAutomaticFontColor ? overriddenFontColor : automaticFontColor
  },
  supportColor: {
    success: `hsl(${successHue}, ${saturation}%, ${lightness})`,
    warning: `hsl(${warningHue}, ${saturation}%, ${lightness})`
  },
  padding: {
    header: '1rem 1rem 1rem 2rem',
    container: '7rem 2rem',
    footer: '2rem 2rem'
  },
  margin: {
    title: '3rem',
    main: '4rem 10rem',
    headerIcon: '0 1rem'
  },
  borderRadius: {
    container: '10px'
  },
  shadow: {
    image: `drop-shadow(${shadowXPosition}px ${shadowYPosition}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}))`,
    header: `0 ${shadowYPosition + 3}px ${shadowBlur}px 0px rgba(0, 0, 0, ${(shadowOpacity - 0.1).toFixed(2)})`,
    container: `${shadowXPosition}px ${shadowYPosition}px ${shadowBlur}px 0px rgba(0, 0, 0, ${shadowOpacity})`,
    footer: `0 ${shadowYPosition - 5}px ${shadowBlur}px 0px rgba(0, 0, 0, ${(shadowOpacity - 0.1).toFixed(2)})`
  },
  font: {
    header: {
      fontSize: `${fontSize + 1.3}em`,
      fontWeight: 700
    },
    title: {
      fontSize: `${fontSize + 1.5}em`,
      fontWeight: 500,
      textAlign: 'center'
    },
    subtitle: {
      fontSize: `${fontSize + 0.5}em`,
      textAlign: 'center'
    },
    content: {
      fontSize: `${fontSize + 0.2}em`,
      fontWeight: 500
    },
    footer: {
      fontSize: `${fontSize + 0.3}em`,
      fontWeight: 400
    },
    breadcrumb: {
      fontSize: `${fontSize + 0.2}em`,
      fontWeight: 400,
      color: `rgb(${backgroundColorConstant - bgConstantOffset}, ${backgroundColorConstant - bgConstantOffset}, ${backgroundColorConstant - bgConstantOffset})`
    }
  },
  animation: {
    globalTransition: `all ${animationDuration}s ${animationBezier}`,
    hoverIcon: {
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
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sharkBorder: {
    backgroundImage:
      `linear-gradient(135deg, ${backgroundColor} 50%, transparent 50%),
       linear-gradient(225deg, ${backgroundColor} 50%, transparent 50%),
       linear-gradient(45deg, ${backgroundColor} 50%, transparent 50%),
       linear-gradient(-45deg, ${backgroundColor} 50%, transparent 50%)`,
    backgroundPosition:
      'top left, top left, ' +
      'bottom left, bottom left',
    backgroundSize: `${dentsSize} ${dentsSize}`,
    backgroundRepeat: 'repeat-x'
  }
}

export default LightTheme;