export const inArray = (array, item) => array.indexOf(item) > -1

export const flattenArray = (array) => array.reduce((a, b) => a.concat(b))

export const getTimestamp = () => new Date().getTime()
