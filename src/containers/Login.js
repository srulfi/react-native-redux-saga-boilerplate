import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AuthActions } from '../actions'
import { BaseStyles } from '../themes'

class Login extends Component {

  componentDidUpdate (prevProps) {
    const { loggedIn, navigation } = this.props

    if (!prevProps.loggedIn && loggedIn) {
      navigation.navigate('Home')
    }
  }

  render () {
    const { login } = this.props

    return (
      <View style={BaseStyles.mainContainer}>
        <Text>Login Screen</Text>
        <TouchableOpacity style={BaseStyles.authButton} onPress={() => login('admin', '1234')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(AuthActions.login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
