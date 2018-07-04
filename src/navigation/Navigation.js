import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import RootNavigator from './RootNavigator'

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const NavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav,
})

const Navigation = connect(mapStateToProps)(NavigationState);

export { Navigation, NavigationMiddleware }
