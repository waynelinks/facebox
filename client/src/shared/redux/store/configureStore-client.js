import Axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { userMiddleware } from '../middleware/users'
import { apiMiddleware } from '../middleware/api'

export default preloadedState => {
  const axiosInstance = Axios.create({
    base: '/api'
  })

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(axiosInstance),
        userMiddleware,
        apiMiddleware
      )
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
