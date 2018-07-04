import { createStackNavigator } from 'react-navigation'

import Launch from '../containers/Launch'
import Home from '../containers/Home'
import Login from '../containers/Login'

import styles from './styles/NavigationStyles'

const RootNavigator = createStackNavigator({
  Launch: { screen: Launch },
  Home: { screen: Home },
  Login: { screen: Login },
}, {
  headerMode: 'none',
  initialRouteName: 'Launch',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default RootNavigator
