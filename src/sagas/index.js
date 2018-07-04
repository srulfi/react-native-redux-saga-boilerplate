import { all, takeLatest } from 'redux-saga/effects'
import DebugConfig from '../config/DebugConfig'

// types
import {
  AuthTypes,
} from '../types'

// sagas
import {
  login,
  logout,
} from './AuthSagas'

// connect types to sagas
export default function * root () {
  yield all([
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
