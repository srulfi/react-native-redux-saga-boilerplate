import { call, put, select } from 'redux-saga/effects'

import { AuthTypes } from '../types'

export function * syncUser (action) {
  try {
    // API session request. For now we just get the state from the persisted reducer
    const loggedIn = yield select(state => state.auth.loggedIn)
    const user = yield select(state => state.auth.user)

    yield put({ type: AuthTypes.SYNC_USER_SUCCESS, loggedIn, user })
  } catch (error) {
    yield put({ type: AuthTypes.SYNC_USER_ERROR, error })
  }
}

export function * login (action) {
  try {
    // API login request (email: action.email, password: action.password)
    const user = {
      name: 'John',
      lastname: 'Doe',
    }

    yield put({ type: AuthTypes.LOGIN_SUCCESS, user })
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error })
  }
}

export function * logout (action) {
  try {
    // API logout request
    yield put({ type: AuthTypes.LOGOUT_SUCCESS })
  } catch (error) {
    yield put({ type: AuthTypes.LOGOUT_ERROR, error })
  }
}
