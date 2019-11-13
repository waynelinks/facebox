import { IMAGE_API_CALL, FACEBOX_IMAGE_API_CALL, IMAGE } from '../constants'
import { apiRequest } from '../actions/api'

export const imageMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case IMAGE_API_CALL:
      console.log('image middleware: ',action.payload)
      dispatch(
        apiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_IMAGE_API_CALL,
          IMAGE
        )
      )
      break
  }
}
