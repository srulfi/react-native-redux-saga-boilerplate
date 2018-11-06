import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Rehydration from '../services/Rehydration'
import ReduxPersist from '../config/ReduxPersist'
import Config from '../config/DebugConfig'
import { NavigationMiddleware } from '../navigation/Navigation'

export default (rootReducer, rootSaga) => {

  const middleware = []
  const enhancers = []

  // navigation middleware
  middleware.push(NavigationMiddleware)

  // saga middleware
  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  middleware.push(sagaMiddleware)

  // assemble middleware
  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
