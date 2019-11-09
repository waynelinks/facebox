import { SET_ERROR_NOTIFICATION } from '../constants'
import { setErrorNotification } from '../actions/notifications'

export const notificationsMiddleware = ({
  dispatch
}) => next => async action => {
  next(action)

  setTimeout(() => {
    console.log('notification middleware')
    if (action.type.includes(SET_ERROR_NOTIFICATION)) {
      dispatch(setErrorNotification({ error: '' }))
    }
  }, 5000)
}
