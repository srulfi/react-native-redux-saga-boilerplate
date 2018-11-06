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

class Home extends Component {

  componentDidUpdate (prevProps) {
    const { loggedIn, navigation } = this.props

    if (prevProps.loggedIn && !loggedIn) {
      navigation.navigate('Login')
    }
  }

  render () {
    const { logout } = this.props

    return (
      <View style={BaseStyles.mainContainer}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={BaseStyles.authButton} onPress={() => logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
