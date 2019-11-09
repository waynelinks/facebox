import { SET_ERROR_NOTIFICATION, REMOVE_ERROR_NOTIFICATION } from '../constants'

const initialState = {
  error: 'Nothing here to see'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR_NOTIFICATION:
      return { ...state, error: payload }

    default:
      return state
  }
}
