import axios from 'axios'
import { API_REQUEST, FACEBOX_API } from '../constants'
import { apiSuccess, apiERROR } from '../actions/api'

export const apiMiddleware = async ({ dispatch }) => next => action => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { body, url, method, entity } = action.meta

    try {
      const response = await axios.method(url, body)

      dispatch(apiSuccess({response, entity}))
    } catch (error) {
      dispatch(apiERROR({error, entity}))
    }
  }
}
