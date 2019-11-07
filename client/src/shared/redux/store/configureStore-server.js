import Axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default req => {
  const axiosInstance = Axios.create({
    baseURL: process.env.API
  })

  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )

  return store
}
