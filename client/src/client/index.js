import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import configureStore from '../shared/redux/store/configureStore-client'
import Routes from '../shared/routes'
import './index.css'

const store = configureStore(window.__PRELOADED_STATE__)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('../shared/routes', () => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    )
  })
}
