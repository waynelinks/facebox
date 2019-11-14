import { PROCESS_IMAGE, SET_ENTRIES, SET_FACE } from '../constants'

const initialState = { image: null, entries: null, box: null }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROCESS_IMAGE:
      return {
        ...state,
        ...payload,
        image: payload.image
      }
    case SET_FACE:
      console.log(payload)
      return { ...state, box: payload }
    case SET_ENTRIES:
      return { ...state, entries: payload }

    default:
      return state
  }
}
