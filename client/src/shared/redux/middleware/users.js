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
import { setNotification } from '../actions/notifications'

export const userMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case SIGNUP_USER:
      next(
        apiRequest({
          email,
          password,
          method: 'POST',
          url: FACEBOX_API_SIGNIN,
          entity: USER
        })
      )
      break

    case SIGNIN_USER:
      dispatch(apiRequest(action.payload, action.api, 'POST', FACEBOX_API_SIGNIN, USER))
      break

    case `${USER} ${API_SUCCESS}`:
      dispatch(
        setUser({
          user: action.payload
        })
      )
      break

    case `${USER} ${API_ERROR}`:
      dispatch(setNotification(action.payload, USER))
      break
  }
}
