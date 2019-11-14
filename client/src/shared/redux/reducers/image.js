import { PROCESS_IMAGE, SET_ENTRIES, SET_FACE, DETECT_FACE } from '../constants'

const initialState = { image: null, entries: null, box: null }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROCESS_IMAGE:
      return {
        ...state,
        ...payload,
        image: payload.image
      }
    case DETECT_FACE:
      console.log('detectFace reducer: ',payload)
      const clarifaiFace =
        payload.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('image')
      const width = Number(image.width)
      const height = Number(image.height)
      console.log(width, height)
      const displayBox = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height
      }
      return { ...state, box: displayBox }
    case SET_ENTRIES:
      return { ...state, entries: payload }

    default:
      return state
  }
}
