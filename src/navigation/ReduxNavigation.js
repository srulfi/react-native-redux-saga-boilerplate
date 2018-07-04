import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { Navigation } from './Navigation'
import { Platform } from '../utils'

class ReduxNavigation extends Component {

  componentDidMount () {
    if (!Platform.isIOS()) {
      BackHandler.addEventListener('hardwareBackPress', this._onBackPress)
    }
  }

  componentWillUnmount () {
    if (!Platform.isIOS()) {
      BackHandler.removeEventListener('hardwareBackPress', this._onBackPress)
    }
  }

  _onBackPress () {
    const { dispatch, nav } = this.props

    if (nav.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

  render () {
    return (
      <Navigation navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
        }}
      />
    )
  }
}

export default ReduxNavigation
