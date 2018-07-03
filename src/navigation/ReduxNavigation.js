import React, { Component } from 'react'
import { BackHandler, Platform } from 'react-native'
import { Navigation } from './Navigation'

class ReduxNavigation extends Component {

  componentDidMount () {
    if (this._isAndroid()) {
      BackHandler.addEventListener('hardwareBackPress', this._onBackPress)
    }
  }

  componentWillUnmount () {
    if (this._isAndroid()) {
      BackHandler.removeEventListener('hardwareBackPress', this._onBackPress)
    }
  }

  _isAndroid () {
    return Platform.OS === 'android'
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
