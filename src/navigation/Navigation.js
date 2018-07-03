import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import Launch from '../containers/Launch'
import Home from '../containers/Home'
import Login from '../containers/Login'

import styles from './styles/NavigationStyles'

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

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

const NavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav,
})

const Navigation = connect(mapStateToProps)(NavigationState);

export { Navigation, RootNavigator, NavigationMiddleware }
