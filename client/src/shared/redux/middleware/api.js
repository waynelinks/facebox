import axios from 'axios'
import { API_REQUEST, FACEBOX_API, USER } from '../constants'
import { apiSuccess, apiError } from '../actions/api'

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { email, password, api, method, url, entity } = action.payload

    try {
      // const response = await api.post(url, { email, password })
      const response = await api({ method, url, data: { email, password } })
      console.log(response)
      dispatch(apiSuccess(response.data, entity))
    } catch (error) {
      dispatch(apiError(error.response.data, entity))
    }
  }
}
