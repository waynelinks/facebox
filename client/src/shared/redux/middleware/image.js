import { PROCESS_IMAGE, FACEBOX_PROCESS_IMAGE, IMAGE } from '../constants'
import { apiRequest } from '../actions/api'

export const imageMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case PROCESS_IMAGE:
      dispatch(
        apiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_PROCESS_IMAGE,
          IMAGE
        )
      )
      break
  }
}
