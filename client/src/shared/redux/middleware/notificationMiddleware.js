import { SET_ERROR_NOTIFICATION } from '../constants'
import { setErrorNotification } from '../actions/notifications'

export const notificationsMiddleware = ({
  dispatch
}) => next => async action => {
  next(action)

  setTimeout(() => {
    if (action.type.includes(SET_ERROR_NOTIFICATION)) {
      next(setErrorNotification({ error: '' }))
    }
  }, 5000)
}
