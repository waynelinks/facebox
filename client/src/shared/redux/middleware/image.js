import { IMAGE_API_CALL, FACEBOX_IMAGE_API_CALL, IMAGE_URL } from '../constants'
import { imageApiRequest } from '../actions/api'

export const imageMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case IMAGE_API_CALL:
      console.log('Clarifai Middleware: ', action.payload)
      dispatch(
        imageApiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_IMAGE_API_CALL,
          IMAGE_URL
        )
      )
      break
  }
}
