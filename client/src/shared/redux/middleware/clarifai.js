import { CLARIFAI_API_CALL, FACEBOX_CLARIFAI_API_CALL } from '../constants'

export const clarifaiMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case CLARIFAI_API_CALL:
      dispatch(
        apiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_CLARIFAI_API_CALL,
          USER
        )
      )
      break
  }
}
