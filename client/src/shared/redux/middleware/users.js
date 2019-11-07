import {
  SIGNUP_USER,
  FACEBOX_API,
  USER,
  SIGNIN_USER,
  API_SUCCESS,
  API_ERROR
} from '../constants'
import { apiRequest } from '../actions/api'
import { setUser } from '../actions/users'
import { setNotification } from '../actions/notifications'

export const userMiddleware = data => next => action => {
  next(action)

  switch (action.type) {
    case SIGNUP_USER:
      next(
        apiRequest({
          body: data,
          method: 'POST',
          url: FACEBOX_API,
          entity: USER
        })
      )
      break

    case SIGNIN_USER:
      next(
        apiRequest({
          body: data,
          method: 'POST',
          url: FACEBOX_API,
          entity: USER
        })
      )
      break

    case API_SUCCESS:
      next(
        setUser({
          user: action.payload
        })
      )
      break

    case API_ERROR:
      next(
        setNotification({
          message: action.payload,
          entity: USER
        })
      )
      break
  }
}
