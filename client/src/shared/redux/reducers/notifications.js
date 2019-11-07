import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case type.includes(SET_NOTIFICATION):
      return { ...state, ...payload }
    case type.includes(REMOVE_NOTIFICATION):
      return state.filter(notification => notification.id != payload)

    default:
      return state
  }
}
