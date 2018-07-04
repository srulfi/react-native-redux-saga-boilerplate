export const inArray = (array, item) => array.indexOf(item) > -1

export const flattenArray = (array) => {
  return array.reduce((a, b) => {
    return a.concat(b)
  })
}

export const getTimestamp = () => new Date().getTime()
