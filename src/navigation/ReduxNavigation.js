import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
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
    const { dispatch, nav } = this.props;

    return (
      <Navigation
        navigation={{
          dispatch,
          nav,
        }}
      />
    );
  }
}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxNavigation)
