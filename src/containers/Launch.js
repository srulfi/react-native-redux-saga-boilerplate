import React, { Component } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import { AuthActions } from '../actions/'

import styles from './styles/LaunchStyles'

class Launch extends Component {

  componentDidMount () {
    this.props.syncUser()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.loading && this.props.success) {
      const screen = this.props.loggedIn ? 'Home' : 'Login'

      this.props.navigation.navigate(screen)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
  success: state.auth.success,
})

const mapDispatchToProps = dispatch => ({
  syncUser: () => dispatch(AuthActions.syncUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
