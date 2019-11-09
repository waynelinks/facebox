import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'
// Do the reducers
export const setErrorNotification = payload => ({
  type: SET_ERROR_NOTIFICATION,
  payload
})
