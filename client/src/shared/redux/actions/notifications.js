import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants'

export const setNotification = ({ message, entity }) => ({
  type: SET_NOTIFICATION,
  payload: message,
  meta: { entity }
})

export const removeNotification = ({ notificationID, entity }) => ({
  type: REMOVE_NOTIFICATION,
  payload: notificationID,
  meta: { entity }
})
