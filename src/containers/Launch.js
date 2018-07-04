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
    const screen = this.props.loggedIn ? 'Home' : 'Login'

    this.props.navigation.navigate(screen)
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
  loggedIn: state.auth.loggedIn
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
