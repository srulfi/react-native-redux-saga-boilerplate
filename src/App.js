import './config/ReactotronConfig'
import DebugConfig from './config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReduxNavigation from './navigation/ReduxNavigation'
import createStore from './store'

const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
