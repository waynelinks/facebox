import { API_REQUEST, IMAGE, USER } from '../constants'
import { apiSuccess, apiError } from '../actions/api'

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  switch (action.type) {
    case `${USER} ${API_REQUEST}`:
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

  // if (action.type.includes(API_REQUEST)) {
  //   const { name, email, password, api, method, url, entity } = action.payload
  //   try {
  //     const response = await api({
  //       method,
  //       url,
  //       data: { name, email, password }
  //     })
  //     dispatch(apiSuccess(response.data, entity))
  //   } catch (error) {
  //     dispatch(apiError(error.response.data, entity))
  //   }
  // }

  // if (action.type.includes(`${IMAGE} ${API_REQUEST}`)) {
  //   const { image_input, id, api, method, url, entity } = action.payload

  //   try {
  //     const response = await api({
  //       method,
  //       url,
  //       data: { image_input, id }
  //     })
  //     dispatch(apiSuccess(response.data, entity))
  //   } catch (error) {
  //     dispatch(apiError(error.response.data, entity))
  //   }
  // }
}
