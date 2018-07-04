import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { AuthActions } from '../actions/'

import styles from './styles/LoginStyles'

class Login extends Component {

  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.props.navigation.navigate('Home')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.login('admin', '1234')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(AuthActions.login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
