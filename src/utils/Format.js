export const isNumeric = (input) =>  /^\d+$/.test(input)

export const isEmailValid = (email) => /^\w+([\.-]?[a-zA-Z0-9_-]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

export const trimSpaces = (text) => text && text.replace(/\s/g, '')
