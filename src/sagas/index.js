import { all, takeLatest } from 'redux-saga/effects'
import DebugConfig from '../config/DebugConfig'

/* ------------- Types ------------- */

import {
  AuthTypes,
} from '../types'

/* ------------- Sagas ------------- */

import {
  login,
  logout,
} from './AuthSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
