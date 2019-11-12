import { IMAGE_API_CALL } from '../constants'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGE_API_CALL:
      return { ...state, ...payload }

    default:
      return state
  }
}
