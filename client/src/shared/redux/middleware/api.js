import axios from 'axios'
import { API_REQUEST, FACEBOX_API, USER } from '../constants'
import { apiSuccess, apiERROR } from '../actions/api'

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { email, password, method, url, entity } = action.payload
    try {
      const response = await axios.post(url, email, password)
      dispatch(apiSuccess({ response, entity }))
    } catch (error) {
      dispatch(apiERROR(error, entity))
    }
  }
}
