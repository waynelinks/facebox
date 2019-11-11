import {
  CLARIFAI_API_CALL,
  FACEBOX_CLARIFAI_API_CALL,
  CLARIFAI_URL
} from '../constants'
import { clarifaiApiRequest } from '../actions/api'

export const clarifaiMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case CLARIFAI_API_CALL:
      dispatch(
        clarifaiApiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_CLARIFAI_API_CALL,
          CLARIFAI_URL
        )
      )
      break
  }
}
