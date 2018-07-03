import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { AuthActions } from '../actions/'

import styles from './styles/LaunchStyles'

class Launch extends Component {

  componentDidMount () {
      this.props.navigation.navigate('Login')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
