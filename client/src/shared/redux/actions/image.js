import { IMAGE_API_CALL, SET_ENTRIES } from '../constants'

export const imageApiCall = payload => (dispatch, getState, api) => {
  dispatch({
    type: IMAGE_API_CALL,
    payload,
    api
  })
}

export const setEntries = payload => ({
  type: SET_ENTRIES,
  payload
})
