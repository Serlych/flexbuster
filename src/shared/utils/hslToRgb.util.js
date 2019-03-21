const HSLtoRGB = (hue, saturation, lightness) => {
  
  saturation /= 100
  lightness /= 100
  
  let chroma = (1 - Math.abs(2 * lightness -1)) * saturation
  let x = chroma * (1 - Math.abs((hue / 60) % 2 - 1))
  
  let match = lightness - chroma / 2
  
  let red = 0
  let green = 0
  let blue = 0

  if (0 <= hue && hue < 60) {
    red = chroma
    green = x
    blue = 0
  } else if (60 <= hue && hue < 120) {
    red = x
    green = chroma
    blue = 0
  } else if (120 <= hue && hue < 180) {
    red = 0
    green = chroma
    blue = x
  } else if (180 <= hue && hue < 240) {
    red = 0
    green = x
    blue = chroma
  } else if (240 <= hue && hue < 300) {
    red = x
    green = 0
    blue = chroma
  } else if (300 <= hue && hue < 360) {
    red = chroma
    green = 0
    blue = x
  }
  
  red = Math.round((red + match) * 255)
  green = Math.round((green + match) * 255)
  blue = Math.round((blue + match) * 255)
  
  return [red, green, blue]
}

export default HSLtoRGB;