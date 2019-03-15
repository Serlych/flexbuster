const hue = 170;
const successHue = 125;
const warningHue = 45;

const saturation = 40;
const lightness = 55;

const hueOffset = 60;
const saturationOffset = 10;
const lightnessOffset = 10;

const dentsGradColor = 'rgba(252,252,252,1)';
const dentsSize = '32px';

const shadowXPosition = '3px';
const shadowYPosition = 2;
const shadowBlur = '6px';
const shadowOpacity = 0.4;

const fontAccent = 'Sniglet, cursive'
const fontSize = 1;

const LightTheme = {
  primaryColor: {
    main: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    accent: `hsl(${hue}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`
  },
  secondaryColor: {
    main: `hsl(${hue - hueOffset}, ${saturation}%, ${lightness}%)`,
    accent: `hsl(${hue - hueOffset}, ${saturation + saturationOffset}%, ${lightness - lightnessOffset}%)`
  },
  grayColor: {
    main: `hsl(${hue}, ${Math.ceil(saturation / 2)}%, ${Math.ceil(lightness / 0.9)}%)`,
    accent: `hsl(${hue}, ${Math.ceil(saturation / 3)}%, ${Math.ceil(lightness / 1.2)}%)`
  },
  supportColor: {
    success: `hsl(${successHue}, ${saturation}%, ${lightness})`,
    warning: `hsl(${warningHue}, ${saturation}%, ${lightness})`
  },
  padding: {
    header: '1rem 2rem',
    footer: '2rem 2rem',
    container: '7rem 2rem'
  },
  margin: {
    header: '1rem',
    container: '2rem 10rem'
  },
  shadow: {
    image: `drop-shadow(${shadowXPosition} ${shadowYPosition}px ${shadowBlur} rgba(0, 0, 0, ${shadowOpacity}))`,
    header: `0 ${shadowYPosition + 3}px ${shadowBlur} 0px rgba(0, 0, 0, ${(shadowOpacity - 0.1).toFixed(2)})`,
    container: `${shadowXPosition} ${shadowYPosition} ${shadowBlur} 0px rgba(0, 0, 0, ${shadowOpacity})`
  },
  font: {
    title: {
      fontSize: `${fontSize + 2}em`,
      fontFamily: fontAccent,
      textAlign: 'center'
    },
    subtitle: {
      fontSize: `${fontSize + 0.5}em`,
      textAlign: 'center'
    },
    header: {
      fontSize: `${fontSize + 1.3}em`,
      color: 'white',
      fontWeight: 500
    },
    footer: {
      fontSize: `${fontSize + 0.3}em`,
      color: `hsl(${hue}, 10%, ${(lightness / 0.10).toFixed(0)}%)`,
      fontWeight: 500
    }
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sharkBorder: {
    backgroundImage:
      `linear-gradient(135deg, ${dentsGradColor} 50%, transparent 50%),
       linear-gradient(225deg, ${dentsGradColor} 50%, transparent 50%),
       linear-gradient(45deg, ${dentsGradColor} 50%, transparent 50%),
       linear-gradient(-45deg, ${dentsGradColor} 50%, transparent 50%)`,
    backgroundPosition:
      'top left, top left, ' +
      'bottom left, bottom left',
    backgroundSize: `${dentsSize} ${dentsSize}`,
    backgroundRepeat: 'repeat-x'
  }
}

export default LightTheme;