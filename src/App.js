import './config/ReactotronConfig'
import React from 'react'
import { Provider } from 'react-redux'
import DebugConfig from './config/DebugConfig'
import ReduxNavigation from './navigation/ReduxNavigation'
import createStore from './store'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
