import { SET_USER } from '../constants'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload }

    default:
      return state
  }
}
