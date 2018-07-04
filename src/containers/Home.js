import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import { AuthActions } from '../actions/'

import styles from './styles/HomeStyles'

class Home extends Component {

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.loggedIn && !this.props.loggedIn) {
      this.props.navigation.navigate('Login')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => this.props.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
