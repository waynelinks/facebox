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

export const userMiddleware = ({ dispatch }) => next => action => {
  next(action)
  console.log('dispatch', dispatch)

  switch (action.type) {
    case SIGNUP_USER:
      next(
        apiRequest({
          email,
          password,
          method: 'POST',
          url: FACEBOX_API,
          entity: USER
        })
      )
      break

    case SIGNIN_USER:
      console.log('API: ',process.env.RAZZLE_API)
      dispatch(apiRequest(action.payload, 'post', process.env.API, USER))
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
