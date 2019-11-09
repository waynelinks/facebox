import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case type.includes(SET_ERROR_NOTIFICATION):
      return { ...state, ...payload }
    case type.includes(REMOVE_ERROR_NOTIFICATION):
      return state.filter(notification => notification.id != payload)

    default:
      return state
  }
}
