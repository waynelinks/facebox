import {
  PROCESS_IMAGE,
  FACEBOX_PROCESS_IMAGE,
  IMAGE,
  API_SUCCESS,
  API_ERROR,
  DETECT_FACE
} from '../constants'
import { apiRequest } from '../actions/api'
import { setEntries, detectFace, setFace } from '../actions/image'

export const imageMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case PROCESS_IMAGE:
      dispatch(
        apiRequest(
          action.payload,
          action.api,
          'post',
          FACEBOX_PROCESS_IMAGE,
          IMAGE
        )
      )
      break
    case DETECT_FACE:
      const clarifaiFace =
        action.payload.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('image')
      const width = Number(image.width)
      const height = Number(image.height)
      const displayBox = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
      dispatch(setFace(displayBox))
      break
    case `${IMAGE} ${API_SUCCESS}`:
      dispatch(setEntries(action.payload.response.entries, IMAGE))
      dispatch(detectFace(action.payload.response, IMAGE))
      break
    case `${IMAGE} ${API_ERROR}`:
      dispatch(setErrorNotification(action.payload))
      break
  }
}
