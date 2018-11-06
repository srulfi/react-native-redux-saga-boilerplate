export const isNumeric = (input) =>  /^\d+$/.test(input)

export const trimSpaces = (text) => text && text.replace(/\s/g, '')
