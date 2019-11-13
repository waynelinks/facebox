import { PROCESS_IMAGE, SET_ENTRIES } from '../constants'

export const processImage = payload => (dispatch, getState, api) => {
  dispatch({
    type: PROCESS_IMAGE,
    payload,
    api
  })
}

export const setEntries = payload => ({
  type: SET_ENTRIES,
  payload
})
