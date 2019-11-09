import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'

const initialState = {
  errorNotification: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR_NOTIFICATION:
      return { ...state, errorNotification: payload.message }

    default:
      return state
  }
}
