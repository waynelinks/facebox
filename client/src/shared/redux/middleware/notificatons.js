import { SET_NOTIFICATION } from '../constants'
import { setNotification, removeNotification } from '../actions/notifications'

export const notificationMiddleware = () => next => action => {
  if (action.type.includes(SET_NOTIFICATION)) {
    const { payload, meta } = action
    const id = new Date().getMilliseconds()

    const notification = {
      id,
      message: payload
    }

    next(setNotification({ message: notification, entity: meta.entity }))

    setTimeout(() => {
      next(removeNotification({ message: notification, entity: meta.entity }))
    }, 1000)
  } else {
    next(action)
  }
}
