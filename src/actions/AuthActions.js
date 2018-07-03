import { AuthTypes } from '../types'

export const login = (email, password) => {
  return { type: AuthTypes.LOGIN, email, password }
}

export const logout = () => {
  return { type: AuthTypes.LOGOUT }
}
