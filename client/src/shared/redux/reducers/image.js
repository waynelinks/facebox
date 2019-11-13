import { IMAGE_API_CALL, SET_ENTRIES } from '../constants'

const initialState = { image_input: null, entries: null }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGE_API_CALL:
      return {
        ...state,
        ...payload,
        image_input: payload.image_input.image_input
      }
    case SET_ENTRIES:
      console.log('image reducer: ', payload)
      return { ...state, entries: payload }

    default:
      return state
  }
}
