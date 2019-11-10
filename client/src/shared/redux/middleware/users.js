import {
  SIGNUP_USER,
  FACEBOX_API_SIGNIN,
  USER,
  SIGNIN_USER,
  API_SUCCESS,
  API_ERROR
} from '../constants'
import { apiRequest } from '../actions/api'
import { setUser } from '../actions/users'
import { setErrorNotification } from '../actions/notifications'

export const userMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case SIGNUP_USER:
      dispatch(
        apiRequest(action.payload, action.api, 'post', FACEBOX_API_SIGNIN, USER)
      )
      break

    case SIGNIN_USER:
      dispatch(
        apiRequest(action.payload, action.api, 'post', FACEBOX_API_SIGNIN, USER)
      )
      break

    case `${USER} ${API_SUCCESS}`:
      dispatch(setUser(action.payload, USER))
      break

    case `${USER} ${API_ERROR}`:
      dispatch(setErrorNotification(action.payload))
      break
  }
}
