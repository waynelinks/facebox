import { PROCESS_IMAGE, SET_ENTRIES } from '../constants'

const initialState = { image: null, entries: null }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROCESS_IMAGE:
      return {
        ...state,
        ...payload,
        image: payload.image
      }
    case SET_ENTRIES:
      console.log('image reducer: ', payload)
      return { ...state, entries: payload }

    default:
      return state
  }
}
