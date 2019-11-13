import { API_REQUEST, IMAGE, USER } from '../constants'
import { apiSuccess, apiError } from '../actions/api'

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  switch (action.type) {
    case API_REQUEST:
      const data = action.payload
      const { api, method, url, entity } = action.properties

      try {
        const res = await api({ method, url, data })

        dispatch(apiSuccess(res.data, entity))
      } catch (ex) {
        dispatch(apiError(ex.res.data, entity))
      }
      break

    default:
      break
  }

}
