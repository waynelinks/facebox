import { API_REQUEST, FACEBOX_API, USER, IMAGE_API_REQUEST } from '../constants'
import { apiSuccess, apiError } from '../actions/api'

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { name, email, password, api, method, url, entity } = action.payload

    try {
      const response = await api({
        method,
        url,
        data: { name, email, password }
      })
      dispatch(apiSuccess(response.data, entity))
    } catch (error) {
      dispatch(apiError(error.response.data, entity))
    }
  }

  if (action.type.includes(IMAGE_API_REQUEST)) {
    const { image_input, id, api, method, url, entity } = action.payload
    // console.log('Middleware: ',imageUrl)
    try {
      const response = await api({
        method,
        url,
        data: { image_input, id }
      })
      dispatch(apiSuccess(response.data, entity))
    } catch (error) {
      dispatch(apiError(error.response.data, entity))
    }
  }
}
