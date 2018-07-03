import { call, put, select, take } from 'redux-saga/effects'

import { AuthTypes } from '../types'

export function * login (action) {
  yield put({ type: AuthTypes.LOGIN_SUCCESS, user: { name: 'John', lastname: 'Doe' } })
}

export function * logout (action) {
  yield put({ type: AuthTypes.LOGOUT_SUCCESS })
}
