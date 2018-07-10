import Immutable from 'seamless-immutable'

import { AuthTypes } from '../types'

const INITIAL_STATE = Immutable({
  loading: false,
  loggedIn: false,
  user: null,
  success: false,
  error: null,
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SYNC_USER:
    case AuthTypes.LOGIN:
    case AuthTypes.LOGOUT:
      return state.merge({
        loading: true,
        success: false,
        error: null,
      })

    case AuthTypes.SYNC_USER_SUCCESS:
      return state.merge({
        loading: false,
        loggedIn: action.loggedIn,
        user: action.user,
        success: true,
        error: null,
      })

    case AuthTypes.LOGIN_SUCCESS:
      return state.merge({
        loading: false,
        loggedIn: true,
        user: action.user,
        success: true,
        error: null,
      })

    case AuthTypes.LOGOUT_SUCCESS:
      return state.merge({
        loading: false,
        loggedIn: false,
        user: null,
        success: true,
        error: null,
      })

    case AuthTypes.SYNC_USER_ERROR:
    case AuthTypes.LOGIN_ERROR:
    case AuthTypes.LOGOUT_ERROR:
      return state.merge({
        loading: false,
        success: false,
        error: action.error,
      })

    default:
      return state
  }
}
