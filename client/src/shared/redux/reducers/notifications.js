import { SET_ERROR_NOTIFICATION } from '../constants'

const initialState = {
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR_NOTIFICATION:
      return { ...state, ...payload }

    default:
      return state
  }
}
