export const getNewState = (prevState, newState) => {
  return Object.assign({}, prevState, newState)
}

export const isFirstRender = items => {
  return !items || items.length === 0 || Object.keys(items).length === 0
}