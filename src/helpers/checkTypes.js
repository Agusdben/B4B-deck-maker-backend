export const isString = value => {
  return typeof value === 'string'
}

export const isNumber = value => {
  return typeof value === 'number' && !isNaN(value)
}

export const isLengthExpected = ({ value, minLength, maxLength }) => {
  return value.length >= minLength && value.length <= maxLength // between min and max
}

export const isArray = value => {
  return Array.isArray(value)
}

export const isBoolean = value => {
  return typeof value === 'boolean'
}
