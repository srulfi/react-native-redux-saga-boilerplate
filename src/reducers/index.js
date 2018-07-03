import { combineReducers } from 'redux'

import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
})
