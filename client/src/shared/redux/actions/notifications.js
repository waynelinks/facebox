import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants'

export const setNotification = (payload, entity) => ({
  type: `${entity} ${SET_NOTIFICATION}`,
  payload
})

export const removeNotification = (payload, entity) => ({
  type: `${entity} ${REMOVE_NOTIFICATION}`,
  payload
})
