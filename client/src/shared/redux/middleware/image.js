import {
  PROCESS_IMAGE,
  FACEBOX_PROCESS_IMAGE,
  IMAGE,
  API_SUCCESS,
  API_ERROR,
  DETECT_FACE
} from '../constants'
import { apiRequest } from '../actions/api'
import { setEntries, detectFace } from '../actions/image'

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
    case `${IMAGE} ${API_SUCCESS}`:
      dispatch(setEntries(action.payload.response.entries, IMAGE))
      dispatch(detectFace(action.payload.response, IMAGE))
      break
    case `${IMAGE} ${API_ERROR}`:
      dispatch(setErrorNotification(action.payload))
      break
  }
}
