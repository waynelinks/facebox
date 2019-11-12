import { IMAGE_API_CALL } from '../constants'

const initialState = {image_input: null}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGE_API_CALL:
      console.log('image reducer: ', payload)
      return { ...state, ...payload, image_input: payload.image_input.image_input }

    default:
      return state
  }
}
