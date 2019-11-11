import { SET_USER, SIGNOUT_USER } from '../constants'

const initialState = {
  session: false,
  response: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload, session: true }

    case SIGNOUT_USER:
      return { state:undefined, session: false }

    default:
      return state
  }
}
