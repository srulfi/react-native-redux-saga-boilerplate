import { AuthTypes } from '../types'

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  user: null,
  success: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, loading: true, success: false, error: null }

    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedIn: true, user: action.user, success: true, error: null }

    case AuthTypes.LOGIN_ERROR:
      return { ...state, loading: false, success: false, error: action.error }

    case AuthTypes.LOGOUT:
      return { ...state, loading: true, success: false, error: null }

    case AuthTypes.LOGOUT_SUCCESS:
      return { ...state, loading: false, loggedIn: false, user: null, success: true, error: null }

    case AuthTypes.LOGOUT_ERROR:
      return { ...state, loading: false, success: false, error: action.error }

    default:
      return state
  }
}
