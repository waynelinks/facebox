import { CLARIFAI_API_CALL } from "../constants"

export const clarifaiAPIcall = payload => (dispatch, getState, api) => {
  dispatch({
    type: CLARIFAI_API_CALL,
    payload,
    api
  })
}