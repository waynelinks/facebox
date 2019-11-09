import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'
// Do the reducers
export const setErrorNotification = (payload, entity) => ({
  type: SET_ERROR_NOTIFICATION,
  payload
})

export const removeErrorNotification = (payload, entity) => ({
  type: REMOVE_ERROR_NOTIFICATION,
  payload
})
