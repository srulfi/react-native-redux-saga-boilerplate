import { RootNavigator } from '../navigation/Navigation'

const INITIAL_STATE = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Launch'))

export default (state = INITIAL_STATE, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || state
}
