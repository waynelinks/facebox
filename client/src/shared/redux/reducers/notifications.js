import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'



export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ERROR_NOTIFICATION:
      return { ...state, ...payload }

    default:
      return state
  }
}
