const calculateComplementary = hue => {
  
  hue = parseInt(hue)
  let result = hue + 180
  
  if (result > 360) {
    result = 360 - hue
  }
  
  return result
}

export default calculateComplementary;