import { IMAGE_API_CALL } from '../constants'

export const imageApiCall = payload => (dispatch, getState, api) => {
  dispatch({
    type: IMAGE_API_CALL,
    payload,
    api
  })
}
