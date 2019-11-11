import Axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { userMiddleware } from '../middleware/users'
import { apiMiddleware } from '../middleware/api'
import { notificationsMiddleware } from '../middleware/notificationMiddleware'
import { clarifaiMiddleware } from '../middleware/clarifai'

export default preloadedState => {
  const axiosInstance = Axios.create({
    baseURL: '/api/api/v1'
  })

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(axiosInstance),
        userMiddleware,
        apiMiddleware,
        notificationsMiddleware,
        clarifaiMiddleware
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
