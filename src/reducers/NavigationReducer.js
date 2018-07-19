import { NavigationActions } from 'react-navigation'
import RootNavigator from '../navigation/RootNavigator'

const initialAction = { type: NavigationActions.Init }
const initialState = RootNavigator.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || state
}
