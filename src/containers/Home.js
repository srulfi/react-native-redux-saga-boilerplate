import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './styles/HomeStyles'

class Home extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>------------------------</Text>
        <TouchableOpacity onPress={() => this.props.login('admin', '1234')}>
          <Text>Ir a Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
