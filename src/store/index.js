import { persistReducer } from 'redux-persist'
import ReduxPersist from '../config/ReduxPersist'
import configureStore from './ConfigureStore'
import reducers from '../reducers/'
import sagas from '../sagas/'

export default () => {
  let finalReducers = reducers

  // if rehydration is on use persistReducer
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, sagas)

  return store
}
