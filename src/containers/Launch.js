import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AuthActions } from '../actions'
import { BaseStyles } from '../themes'

class Launch extends Component {

  componentDidMount () {
    const { syncUser } = this.props

    syncUser()
  }

  componentDidUpdate (prevProps) {
    const { loggedIn, success, navigation } = this.props

    if (prevProps.loading && success) {
      const screen = loggedIn ? 'Home' : 'Login'

      navigation.navigate(screen)
    }
  }

  render () {
    return (
      <View style={BaseStyles.mainContainer}>
        <ActivityIndicator />
      </View>
    )
  }
}

Launch.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  syncUser: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
  success: state.auth.success,
})

const mapDispatchToProps = dispatch => ({
  syncUser: () => dispatch(AuthActions.syncUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
