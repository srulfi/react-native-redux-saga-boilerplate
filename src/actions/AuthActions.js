import { AuthTypes } from '../types'

export const syncUser = () => ({ type: AuthTypes.SYNC_USER })

export const login = (email, password) => ({ type: AuthTypes.LOGIN, email, password })

export const logout = () => ({ type: AuthTypes.LOGOUT })
