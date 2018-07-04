import { persistReducer } from 'redux-persist'
import ReduxPersist from '../config/ReduxPersist'
import configureStore from './ConfigureStore'
import sagas from '../sagas/'
import reducers from '../reducers/'

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
