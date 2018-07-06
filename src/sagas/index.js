import { all, takeLatest } from 'redux-saga/effects'

// types
import {
  AuthTypes,
} from '../types'

// sagas
import {
  syncUser,
  login,
  logout,
} from './AuthSagas'

// connect types to sagas
export default function * root () {
  yield all([
    takeLatest(AuthTypes.SYNC_USER, syncUser),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
